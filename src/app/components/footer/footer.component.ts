import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isMobile = false;
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSizeService
      .$isMobile()
      .subscribe((isMobile) => (this.isMobile = isMobile));
  }
}
