import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Project } from '../../../../models/project';
import { ColorThemeService } from '../../../../services/color-theme.service';
import { ScreenSizeService } from '../../../../services/screen-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();
  bgColor = '#1f1f1f';
  color = 'white';
  compactScreen = false;
  private touchMoveListener: EventListener | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private colorThemeService: ColorThemeService,
    private screenSizeService: ScreenSizeService
  ) {}

  closeDialog() {
    setTimeout(() => {
      this.renderer.removeClass(
        this.el.nativeElement.querySelector('.dialog'),
        'show'
      );
      setTimeout(() => {
        this.close.emit();
      }, 500);
    }, 0);
  }

  onDialogClick(event: Event) {
    event.stopPropagation();
  }

  onOutsideDialogClick() {
    this.closeDialog();
  }

  ngOnInit(): void {
    this.compactScreen = this.screenSizeService.isCompact;
    if (this.colorThemeService.currentTheme === 'light') {
      this.bgColor = 'lightgray';
      this.color = 'black';
    }
    document.body.classList.add('no-scroll');
    setTimeout(() => {
      this.renderer.addClass(
        this.el.nativeElement.querySelector('.dialog'),
        'show'
      );
    }, 0);
    this.addTouchMoveListener();
  }
  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
    this.removeTouchMoveListener();
  }

  private addTouchMoveListener() {
    this.touchMoveListener = this.renderer.listen(
      'window',
      'touchmove',
      (event: TouchEvent) => {
        if (!this.isInsideComponent(event.target as Node)) {
          event.preventDefault();
        }
      }
    );
  }

  private removeTouchMoveListener() {
    if (this.touchMoveListener) {
      this.touchMoveListener = null;
    }
  }

  private isInsideComponent(target: Node): boolean {
    return this.el.nativeElement.contains(target);
  }
}
