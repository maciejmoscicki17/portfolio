import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  scrollProgress: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPx = document.documentElement.scrollTop;
    const windowHeightPx = window.innerHeight;
    const documentHeightPx = document.documentElement.scrollHeight;
    const scrollHeight = documentHeightPx - windowHeightPx;
    this.scrollProgress = (scrollPx / scrollHeight) * 100;
  }
}
