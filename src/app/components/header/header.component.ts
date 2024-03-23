import { Component, OnInit } from '@angular/core';
import { ToastService, ToastType } from '../../services/toast.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private toastService: ToastService) {}
  showToast() {
    this.toastService.add({
      content: 'Tost',
      title: 'title',
      type: ToastType.warning,
    });
  }
}
