import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss',
})
export class ScrollToTopComponent {
  showButton: boolean;

  constructor() {
    this.showButton = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > 100
    ) {
      this.showButton = true;
    } else if (
      this.showButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < 10
    ) {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
