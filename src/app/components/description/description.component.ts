import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  link =
    'https://drive.google.com/file/d/1C-EYKpfQ09zdzjR9P4hnwARUw4FCj1P_/view?usp=sharing';
}
