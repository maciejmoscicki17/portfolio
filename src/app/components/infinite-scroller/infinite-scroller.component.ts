import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-infinite-scroller',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CardComponent],
  templateUrl: './infinite-scroller.component.html',
  styleUrl: './infinite-scroller.component.scss',
})
export class InfiniteScrollerComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') scroller!: ElementRef<HTMLDivElement>;
  @ViewChild('innerScroller') innerScroller!: ElementRef<HTMLDivElement>;

  firstLoad = true;

  skills: Skill[] = [];
  constructor(private http: HttpClient) {}
  ngAfterViewChecked(): void {
    if (this.firstLoad) {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.addAnimation();
      }
      this.http.get<{ skills: Skill[] }>('/assets/skills.json').subscribe({
        next: (data) => {
          data.skills.forEach((skill) => {
            if (skill.name === '.NET' || skill.name === 'Firebird') {
              skill.invert = true;
            }
          });
          this.skills = data.skills;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
  ngOnInit(): void {}

  addAnimation() {
    this.scroller.nativeElement.setAttribute('data-animated', 'true');
    var scrollerContent = Array.from(this.innerScroller.nativeElement.children);
    if (scrollerContent.length !== 0) {
      this.firstLoad = false;
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLDivElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        this.innerScroller.nativeElement.appendChild(duplicatedItem);
      });
    }
  }
}
