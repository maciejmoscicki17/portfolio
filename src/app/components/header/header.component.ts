import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = this.screenSizeService.isMobile;
  constructor(
    private screenSizeService: ScreenSizeService,
    private themeService: ColorThemeService
  ) {}
  ngOnInit(): void {
    this.themeService.init();
    this.screenSizeService.$isMobile().subscribe((x) => (this.isMobile = x));
  }

  setTheme() {
    this.themeService.toggleTheme();
  }
}
