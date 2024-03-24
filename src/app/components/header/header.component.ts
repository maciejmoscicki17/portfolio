import { Component, OnInit } from '@angular/core';
import { ToastService, ToastType } from '../../services/toast.service';
import { ScreenSizeService } from '../../services/screen-size.service';

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
    private screenSizeService: ScreenSizeService
  ) {}
  ngOnInit(): void {
    this.screenSizeService.$isMobile().subscribe((x) => (this.isMobile = x));
  }
  showToast() {
    this.toastService.add({
      content: 'Tost',
      title: 'title',
      type: ToastType.warning,
    });
  }
}
