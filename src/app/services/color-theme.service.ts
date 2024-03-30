import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorThemeService {
  firstLoad = true;
  private _currentTheme: 'light' | 'dark' = 'dark';
  constructor() {}
  $themeChanged = new Subject<void>();

  setTheme(theme?: 'light' | 'dark') {
    if (this.firstLoad) {
      this.firstLoad = false;
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.setDarkTheme();
      }
    }
    this.$themeChanged.next();
  }
  toggleTheme() {
    if (this._currentTheme === 'dark') {
      this.setLightTheme();
    } else this.setDarkTheme();
    this.$themeChanged.next();
  }
  get currentTheme(): 'light' | 'dark' {
    return this._currentTheme;
  }

  private setLightTheme() {
    this._currentTheme = 'light';
    let color = 'light';
    document.documentElement.style.setProperty(
      '--background',
      'linear-gradient(88deg, #FFFFFF, #d1d1d1)'
    );
    document.documentElement.style.setProperty('--textColor', 'black');
    document.documentElement.style.setProperty('--bgColor', 'aliceblue');
    document.documentElement.style.setProperty('--colorTheme', color);
    document.documentElement.style.setProperty(
      '--cardColor',
      'rgba(0, 0, 0, 0.02)'
    );
    document.documentElement.style.setProperty(
      '--accent-gradient',
      'linear-gradient(to bottom right, white, #EFF1F3)'
    );
    document.documentElement.style.setProperty('--thirdColor', 'purple');
  }
  private setDarkTheme() {
    this._currentTheme = 'dark';
    let color = 'dark';
    document.documentElement.style.setProperty(
      '--background',
      'linear-gradient(88deg, #000000, #0c1124)'
    );
    document.documentElement.style.setProperty('--textColor', 'white');
    document.documentElement.style.setProperty('--bgColor', '#10172d');
    document.documentElement.style.setProperty('--colorTheme', color);
    document.documentElement.style.setProperty(
      '--cardColor',
      'rgba(255, 255, 255, 0.02)'
    );
    document.documentElement.style.setProperty(
      '--accent-gradient',
      'linear-gradient(to bottom right, black, #272822)'
    );
    document.body.classList.add('theme-transition');
    document.documentElement.style.setProperty('--thirdColor', 'var(--yellow)');
  }
}
