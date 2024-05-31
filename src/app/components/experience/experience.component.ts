import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationsService } from '../../services/translations.service';
import { Subscription } from 'rxjs';

export interface ExperienceData {
  dateFrom: Date;
  dateTo?: Date;
  companyName: string;
  position: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardComponent, SectionTitleComponent, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnDestroy {
  isMobile = this.screenSizeService.isMobile;
  private subscription = new Subscription();
  jobs: ExperienceData[] = [];

  constructor(
    private screenSizeService: ScreenSizeService,
    private translationService: TranslationsService
  ) {
    this.loadExperience();
    this.subscription.add(
      this.screenSizeService.$isMobile().subscribe((isMobile) => {
        this.isMobile = isMobile;
      })
    );
    this.subscription.add(
      this.translationService.languageChange$.subscribe(() =>
        this.loadExperience()
      )
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadExperience() {
    this.jobs = [
      {
        companyName: 'Proman S.p.z o o',
        position: this.translationService.translate('fullstack_programmer'),
        dateFrom: new Date(2023, 7, 1),
      },
      {
        companyName: 'Comarch S.p.z o o',
        position: this.translationService.translate('intern_programmer'),
        dateFrom: new Date(2022, 7, 1),
        dateTo: new Date(2022, 9, 31),
      },
      {
        companyName: 'Społem',
        position: this.translationService.translate('online_shop_maintainer'),
        dateFrom: new Date(2020, 3, 1),
        dateTo: new Date(2020, 4, 31),
      },
    ];
  }
}
