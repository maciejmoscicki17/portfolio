import { Component, OnInit } from '@angular/core';
import {
  ToastData,
  ToastService,
  ToastType,
} from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  toasts: ToastData[] = [];
  readonly toastTypes = ToastType;
  constructor(private toastService: ToastService) {
    this.toastService.showToast.subscribe((toast) => {
      this.toasts.push(toast);
      setTimeout(() => {
        this.removeToast(toast.id!);
      }, toast.time);
    });
  }
  ngOnInit(): void {}
  removeToast(id: number) {
    this.toasts = this.toasts.filter((x) => x.id !== id);
  }

  getColor(toast: ToastData) {
    switch (toast.type) {
      case ToastType.error:
        return 'redBg';
      case ToastType.warning:
        return 'yellowBg';
      case ToastType.success:
        return 'greenBg';
    }
  }
}
