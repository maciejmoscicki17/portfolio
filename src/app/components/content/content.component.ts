import { Component } from '@angular/core';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { FooterComponent } from '../footer/footer.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    ScrollToTopComponent,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
