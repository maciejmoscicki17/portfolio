import { Component, OnInit } from '@angular/core';
import { ToastService, ToastType } from '../../services/toast.service';
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
    private toastService: ToastService,
    private screenSizeService: ScreenSizeService,
    private themeService: ColorThemeService
  ) {}
  ngOnInit(): void {
    this.themeService.init();
    this.screenSizeService.$isMobile().subscribe((x) => (this.isMobile = x));
  }
  showToast() {
    this.toastService.add({
      content: 'Tost',
      type: ToastType.warning,
    });
  }

  setTheme() {
    this.themeService.toggleTheme();
  }
}
