import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Project } from '../../models/project';
import { PreviewComponent } from './components/preview/preview.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionTitleComponent,
    PreviewComponent,
    DialogComponent,
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  selectedProject?: Project;
  showDialog = false;
  projects: Project[] = [
    {
      name: 'Calendar',
      tools: ['Angular', 'Scss', 'Typescript'],
      role: 'Full-stack developer',
      description:
        'An ongoing project, the Angular All-In-One Calendar Application, is currently under development. This comprehensive application aims to provide a versatile calendar solution within the Angular framework.',
      link: 'https://github.com/maciejmoscicki17/Calendar',
      image: '/assets/img/calendar.png',
    },
    {
      name: 'Conductance Charts',
      tools: ['Typescript', 'Angular'],
      role: 'Full-stack developer',
      description:
        'This completed application analyzes Excel input files to generate professional academic conductance charts efficiently.',
      link: 'https://github.com/maciejmoscicki17/conductanceChart',
      image: '/assets/img/charts.png',
    },
  ];

  private screenSizeService = inject(ScreenSizeService);
  isCompact = this.screenSizeService.isCompact;
  openDialog(project: Project) {
    this.selectedProject = project;
    this.showDialog = true;
  }

  onClose() {
    this.showDialog = false;
    this.selectedProject = undefined;
  }
}
