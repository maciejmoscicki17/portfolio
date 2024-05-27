import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorThemeService {
  firstLoad = true;
  private _currentTheme: 'light' | 'dark' = 'dark';
  constructor() {}
  $themeChanged = new Subject<void>();
  private readonly themeKey = 'selectedTheme';

  init() {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme) {
      this.applyTheme(storedTheme as 'light' | 'dark');
    }
  }

  setTheme(theme?: 'light' | 'dark') {
    if (this.firstLoad) {
      this.firstLoad = false;
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        theme = 'dark';
      } else {
        theme = 'light';
      }
      this.applyTheme(theme);
    } else if (theme) {
      this.applyTheme(theme);
    }

    this.$themeChanged.next();
  }

  private applyTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
    this.$themeChanged.next();
  }
  toggleTheme() {
    if (this._currentTheme === 'dark') {
      this.applyTheme('light');
    } else this.applyTheme('dark');
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
    localStorage.setItem(this.themeKey, this._currentTheme);
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
    localStorage.setItem(this.themeKey, this._currentTheme);
  }
}
