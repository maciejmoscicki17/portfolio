import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TranslationsService } from './services/translations.service';
import { APP_INITIALIZER } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { ToastComponent } from './components/toast/toast.component';
export function initializeApp(
  translationsService: TranslationsService
): () => Promise<void> {
  return (): Promise<void> => translationsService.translationsLoadedPromise;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NotFoundComponent,
    LoaderComponent,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    TranslationsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [TranslationsService],
      multi: true,
    },
  ],
})
export class AppComponent implements OnInit {
  translationsLoaded = false;

  constructor(
    private translationsService: TranslationsService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.showLoader(true);
    this.translationsService.translationsLoadedPromise.then(() => {
      this.translationsLoaded = true;
      this.loaderService.showLoader(false);
    });
  }
}
