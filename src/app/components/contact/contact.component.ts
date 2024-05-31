import { Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactFormComponent,
    ContactInfoComponent,
    SectionTitleComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isMobile = this.screenSizeService.isMobile;
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSizeService
      .$isCompact()
      .subscribe((isMobile) => (this.isMobile = isMobile));
  }
}
