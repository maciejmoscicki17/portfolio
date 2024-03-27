import { Component } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { InfiniteScrollerComponent } from '../infinite-scroller/infinite-scroller.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    ScrollToTopComponent,
    InfiniteScrollerComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
