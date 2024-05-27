import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { Skill } from '../../interfaces/skill';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-infinite-scroller',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    CardComponent,
    SectionTitleComponent,
  ],
  templateUrl: './infinite-scroller.component.html',
  styleUrl: './infinite-scroller.component.scss',
})
export class InfiniteScrollerComponent implements AfterViewChecked, OnInit {
  @ViewChild('scroller') scroller!: ElementRef<HTMLDivElement>;
  @ViewChild('innerScroller') innerScroller!: ElementRef<HTMLDivElement>;
  @Input() skills: Skill[] = [];

  firstLoad = true;

  constructor(private themeService: ColorThemeService) {}
  ngOnInit(): void {
    // this.themeService.$themeChanged.subscribe((x) =>
    //   this.onColorSchemeChange()
    // );
  }
  ngAfterViewChecked(): void {
    if (this.firstLoad) {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.addAnimation();
      }
    }
  }

  addAnimation() {
    this.scroller.nativeElement.setAttribute('data-animated', 'true');
    const scrollerContent = Array.from(
      this.innerScroller.nativeElement.children
    );
    console.log(scrollerContent);
    if (scrollerContent.length !== 0) {
      this.firstLoad = false;
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLDivElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        this.innerScroller.nativeElement.appendChild(duplicatedItem);
      });
    }
  }

  // removeAnimation() {
  //   this.scroller.nativeElement.removeAttribute('data-animated');
  //   const scrollerContent = Array.from(
  //     this.innerScroller.nativeElement.children
  //   );
  //   scrollerContent.forEach((item) => {
  //     if (item.getAttribute('aria-hidden') === 'true') {
  //       this.innerScroller.nativeElement.removeChild(item);
  //     }
  //   });
  // }
  // onColorSchemeChange() {
  //   // this.removeAnimation();
  //   console.log('onChange', this.themeService.currentTheme);
  //   if (this.themeService.currentTheme === 'dark') {
  //     this.skills.forEach((skill) => {
  //       if (skill.name === '.NET' || skill.name === 'Firebird') {
  //         skill.invert = true;
  //       }
  //     });
  //   } else {
  //     this.skills.forEach((skill) => {
  //       if (skill.name === '.NET' || skill.name === 'Firebird') {
  //         skill.invert = false;
  //       }
  //     });
  //   }
  //   console.trace(this.skills);
  //   this.addAnimation();
  //   // location.reload();
  // }
}
