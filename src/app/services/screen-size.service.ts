import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private isMobile$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public get isMobile() {
    return this.isMobile$.value;
  }

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  private checkScreenSize(): void {
    const isSmall = window.innerWidth < 768; // Zakładamy, że szerokość poniżej 768px to mały ekran
    this.isMobile$.next(isSmall);
  }

  public $isMobile(): Observable<boolean> {
    return this.isMobile$.asObservable();
  }
}
