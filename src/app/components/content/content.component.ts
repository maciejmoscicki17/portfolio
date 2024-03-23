import { Component } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [IntroductionComponent, AboutComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  components = [new IntroductionComponent(), new AboutComponent()];
}
