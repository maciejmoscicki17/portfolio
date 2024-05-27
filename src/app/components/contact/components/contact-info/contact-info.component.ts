import { Component } from '@angular/core';
import { ContactInfo } from './interfaces/contact-info';
import { ScreenSizeService } from '../../../../services/screen-size.service';
import { CommonModule } from '@angular/common';
import { ColorThemeService } from '../../../../services/color-theme.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss', '../../../../../styles.scss'],
})
export class ContactInfoComponent {
  isMobile = this.screenSizeService.isCompact;

  invert = false;

  constructor(
    private screenSizeService: ScreenSizeService,
    private themeService: ColorThemeService
  ) {
    this.invert = this.themeService.currentTheme === 'light';

    this.screenSizeService
      .$isCompact()
      .subscribe((isMobile) => (this.isMobile = isMobile));
    this.themeService.$themeChanged.subscribe((x) => {
      this.invert = this.themeService.currentTheme === 'light';
    });
  }
  contactInfo: ContactInfo[] = [
    {
      text: 'maciejmoscickidev@gmail.com',
      className: 'fa-solid fa-at',
      href: 'mailto:maciejmoscickidev@gmail.com',
    },
    {
      text: '+48662963898',
      className: 'fa-solid fa-phone',
      href: 'tel:+48662963898',
    },
    {
      text: 'Katowice, Poland',
      className: 'fa-solid fa-location-dot',
      href: 'https://maps.app.goo.gl/VDHJz1JVMt8fTdtv8',
    },
  ];

  contactIcons = [
    {
      text: 'Github',
      src: '/assets/svg/github.svg',
      href: 'https://github.com/maciejmoscicki17',
    },
    {
      text: 'LinkedIn',
      src: '/assets/svg/linkedin.svg',
      href: 'https://linkedin.com/in/maciej-mościcki-02a278240',
    },
  ];
}
