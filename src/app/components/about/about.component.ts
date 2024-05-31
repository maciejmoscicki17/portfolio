import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  isMobile = false;
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSizeService
      .$isMobile()
      .subscribe((val) => (this.isMobile = val));
  }
}
