import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  title = 'About Me';
  isMobile = false;

  description =
    "My name is MACIEJ MOŚCICKI. I'm a technology enthusiast with a passion for crafting innovative solutions. My expertise primarily lies in Angular and the .NET platform. Since discovering these technologies, my professional journey has been an exciting exploration through the realms of programming. They've empowered me to undertake diverse projects, ranging from dynamic websites to sophisticated business applications. Continuously expanding my knowledge and skills, I strive to stay abreast of the latest technological trends. My determination and love for delivering high-quality software motivate me to pursue excellence in every project I undertake.";
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSizeService
      .$isMobile()
      .subscribe((val) => (this.isMobile = val));
    console.log(this.description.split(' ').length);
  }
}
