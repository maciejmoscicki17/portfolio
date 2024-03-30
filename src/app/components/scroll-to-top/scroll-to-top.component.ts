import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss',
})
export class ScrollToTopComponent implements AfterViewChecked {
  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;
  showButton: boolean;

  constructor() {
    this.showButton = false;
  }
  ngAfterViewChecked(): void {
    console.log(this.button.nativeElement);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 50) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    console.log(this.button.nativeElement);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
