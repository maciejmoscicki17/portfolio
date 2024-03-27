import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements AfterViewInit {
  @Input() border = '1px solid gray';
  @Input() disableBefore = false;
  @Input() scaleOnHover = false;
  ngAfterViewInit(): void {
    document.querySelectorAll('.card').forEach((e) => {
      e.addEventListener('mousemove', (m) => {
        const { currentTarget } = m as MouseEvent;
        if (currentTarget instanceof HTMLElement) {
          const rect = currentTarget.getBoundingClientRect();
          const x = (m as MouseEvent).clientX - rect.left;
          const y = (m as MouseEvent).clientY - rect.top;
          currentTarget.style.setProperty('--mouse-x', `${x}px`);
          currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }
      });
      e.addEventListener('mouseleave', (m) => {
        const { currentTarget } = m as MouseEvent;
        if (currentTarget instanceof HTMLElement) {
          currentTarget.style.removeProperty('--mouse-x');
          currentTarget.style.removeProperty('--mouse-y');
        }
      });
    });
  }
}
