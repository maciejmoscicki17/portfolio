import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: string = 'button';
  @Input() icon: string = '';
  @Input() link: string = '';

  onClick() {
    if (!this.link) return;
    window.open(this.link, '_blank');
  }
}
