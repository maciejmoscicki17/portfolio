import { Component } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    ScrollToTopComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  components = [new IntroductionComponent(), new AboutComponent()];
}
