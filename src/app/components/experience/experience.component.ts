import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

export interface ExperienceData {
  dateFrom: Date;
  dateTo?: Date;
  companyName: string;
  position: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
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
