import { AfterViewChecked, Component } from '@angular/core';
import { InfiniteScrollerComponent } from '../infinite-scroller/infinite-scroller.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Skill } from '../../interfaces/skill';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ColorThemeService } from '../../services/color-theme.service';

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
  showSkills = true;

  constructor(
    private http: HttpClient,
    private screenSizeService: ScreenSizeService,
    private themeService: ColorThemeService
  ) {
    this.screenSizeService.$isMobile().subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
    this.themeService.$themeChanged.subscribe((x) => this.handleThemeChange());
  }

  handleThemeChange() {
    this.showSkills = false;
    this.setInvert();
    setTimeout(() => {
      this.showSkills = true;
    }, 100);
  }

  ngAfterViewChecked(): void {
    if (!this.loaded) {
      this.http.get<{ skills: Skill[] }>('assets/skills.json').subscribe({
        next: (data) => {
          console.warn(data);
          this.skills = data.skills;
          this.setInvert();
          this.loaded = true;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  setInvert() {
    if (this.themeService.currentTheme === 'dark') {
      this.skills.forEach((skill) => {
        if (skill.name === '.NET' || skill.name === 'Firebird') {
          skill.invert = true;
        }
      });
    } else {
      this.skills.forEach((skill) => {
        if (skill.name === '.NET' || skill.name === 'Firebird') {
          skill.invert = false;
        }
      });
    }
  }
}
