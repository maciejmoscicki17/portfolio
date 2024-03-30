import { Component } from '@angular/core';
import { ContactInfo } from './interfaces/contact-info';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent {
  contactInfo: ContactInfo[] = [
    {
      text: 'mvciej@gmail.com',
      className: 'fa-solid fa-at',
      href: 'mailto:mvciej@gmail.com',
    },
    {
      text: '+48 662 963 898',
      className: 'fa-solid fa-phone',
      href: 'tel:+48662963898',
    },
    {
      text: 'Katowice, Poland',
      className: 'fa-solid fa-location-dot',
      href: 'https://maps.app.goo.gl/VDHJz1JVMt8fTdtv8',
    },
  ];
}
