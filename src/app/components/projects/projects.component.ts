import { Component, OnDestroy, inject } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Project } from '../../models/project';
import { PreviewComponent } from './components/preview/preview.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationsService } from '../../services/translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionTitleComponent,
    PreviewComponent,
    DialogComponent,
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnDestroy {
  selectedProject?: Project;
  showDialog = false;
  private translationService = inject(TranslationsService);
  private screenSizeService = inject(ScreenSizeService);
  private subscription = new Subscription();
  projects: Project[] = [];

  constructor() {
    this.subscription.add(
      this.translationService.languageChange$.subscribe(() =>
        this.loadProjects()
      )
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isCompact = this.screenSizeService.isCompact;
  openDialog(project: Project) {
    this.selectedProject = project;
    this.showDialog = true;
  }

  onClose() {
    this.showDialog = false;
    this.selectedProject = undefined;
  }

  loadProjects() {
    this.projects = [
      {
        name: 'Calendar',
        tools: ['Angular', 'Scss', 'Typescript'],
        role: this.translationService.translate('fullstack_programmer'),
        description: this.translationService.translate('calendar_description'),
        link: 'https://github.com/maciejmoscicki17/Calendar',
        image: 'assets/img/calendar.png',
      },
      {
        name: 'Conductance Charts',
        tools: ['Typescript', 'Angular'],
        role: this.translationService.translate('fullstack_programmer'),
        description: this.translationService.translate(
          'conductance_description'
        ),
        link: 'https://github.com/maciejmoscicki17/conductanceChart',
        image: 'assets/img/charts.png',
      },
    ];
  }
}
