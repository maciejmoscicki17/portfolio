import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ScreenSizeEnum } from '../enums/screen-size';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private isMobile$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private isCompact$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private screenType$: BehaviorSubject<ScreenSizeEnum> =
    new BehaviorSubject<ScreenSizeEnum>(ScreenSizeEnum.mobile);

  public get isMobile() {
    return this.isMobile$.value;
  }

  public get isCompact() {
    return this.isCompact$.value;
  }

  public get screenType() {
    return this.screenType$.value;
  }

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  private checkScreenSize(): void {
    const screenSize = window.innerWidth;
    const isSmall = screenSize < 768;
    const isCompact = screenSize < 1024;

    if (screenSize < 768) {
      this.screenType$.next(ScreenSizeEnum.mobile);
    } else if (screenSize < 1280) {
      this.screenType$.next(ScreenSizeEnum.tablet);
    } else {
      this.screenType$.next(ScreenSizeEnum.desktop);
    }
    this.isMobile$.next(isSmall);
    this.isCompact$.next(isCompact);
    // console.log('isSmall', isSmall, window.innerWidth);
  }

  public $isMobile(): Observable<boolean> {
    return this.isMobile$.asObservable();
  }

  public $isCompact(): Observable<boolean> {
    return this.isCompact$.asObservable();
  }

  public $screenType(): Observable<ScreenSizeEnum> {
    return this.screenType$.asObservable();
  }
}
