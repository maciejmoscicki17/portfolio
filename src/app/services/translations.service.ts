import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation } from '../interfaces/translation';
import { Observable, Subject, map } from 'rxjs';
import { ToastService, ToastType } from './toast.service';

@Injectable({ providedIn: 'root' })
export class TranslationsService {
  private translations: Translation[] = [];
  private currentLang: 'en' | 'pl' = 'pl';
  private languageKey = 'language';
  private translationsLoadedPromiseResolve: (() => void) | undefined;

  public translationsLoadedPromise: Promise<void>;
  public languageChange$ = new Subject<void>();

  public getCurrentLanguage(): 'en' | 'pl' {
    return this.currentLang;
  }

  constructor(private http: HttpClient, private toastService: ToastService) {
    this.translationsLoadedPromise = new Promise((resolve) => {
      this.translationsLoadedPromiseResolve = resolve;
    });
    this.loadTranslations().subscribe({
      next: () => {
        if (this.translationsLoadedPromiseResolve) {
          this.translationsLoadedPromiseResolve();
        }
      },
      error: () => {
        this.toastService.add({
          content: 'An error occurred while loading translations',
          type: ToastType.error,
        });
        if (this.translationsLoadedPromiseResolve) {
          this.translationsLoadedPromiseResolve();
        }
      },
    });
    let language = localStorage.getItem(this.languageKey);
    if (language === null) {
      language = window.navigator.language;
    }
    if (language === 'en' || language === 'pl') {
      this.changeLanguage(language);
    } else {
      this.changeLanguage('en');
    }
  }

  private loadTranslations(): Observable<Translation[]> {
    return this.http.get<Translation[]>('assets/translations.json').pipe(
      map((translations) => {
        this.translations = translations;
        return translations;
      })
    );
  }

  public changeLanguage(lang: 'en' | 'pl') {
    this.currentLang = lang;
    localStorage.setItem(this.languageKey, this.currentLang);
    this.languageChange$.next();
  }

  translate(key: string): string {
    const translation = this.translations.find((t) => t.key === key);
    return translation ? translation[this.currentLang] || key : key;
  }
}
