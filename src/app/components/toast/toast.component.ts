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
    const toast = this.toasts.find((x) => x.id === id);
    if (toast) {
      toast.toDelete = true;
      setTimeout(() => {
        const index = this.toasts.indexOf(toast);
        if (index !== -1) {
          this.toasts.splice(index, 1);
        }
      }, 1000);
    }
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
