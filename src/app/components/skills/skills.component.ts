import { AfterViewChecked, Component } from '@angular/core';
import { InfiniteScrollerComponent } from '../infinite-scroller/infinite-scroller.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Skill } from '../../interfaces/skill';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    InfiniteScrollerComponent,
    SectionTitleComponent,
    CardComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewChecked {
  //TODO: Naprawić aktualizaje kolorów skilli po zmianie motywu
  isMobile = this.screenSizeService.isMobile;
  title = 'Skills';
  skills: Skill[] = [];
  loaded = false;

  constructor(
    private http: HttpClient,
    private screenSizeService: ScreenSizeService
  ) {
    this.screenSizeService.$isMobile().subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  ngAfterViewChecked(): void {
    if (!this.loaded) {
      this.http.get<{ skills: Skill[] }>('/assets/skills.json').subscribe({
        next: (data) => {
          this.skills = data.skills;
          this.loaded = true;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
