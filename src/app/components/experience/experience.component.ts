import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SectionTitleComponent } from '../section-title/section-title.component';

export interface ExperienceData {
  dateFrom: Date;
  dateTo?: Date;
  companyName: string;
  position: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardComponent, SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  title = 'Experience';
  jobs: ExperienceData[] = [
    {
      companyName: 'Proman S.p.z o o',
      position: 'Fullstack Programmer',
      dateFrom: new Date(2023, 7, 1),
    },
    {
      companyName: 'Comarch S.p.z o o',
      position: 'Intern Programmer',
      dateFrom: new Date(2022, 7, 1),
      dateTo: new Date(2022, 9, 31),
    },
    {
      companyName: 'Społem',
      position: 'Online Shop Maintainer',
      dateFrom: new Date(2020, 3, 1),
      dateTo: new Date(2020, 4, 31),
    },
  ];
}
