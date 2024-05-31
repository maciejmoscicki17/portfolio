import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TranslationsService } from '../../services/translations.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'language-picker',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './language-picker.component.html',
  styleUrl: './language-picker.component.scss',
})
export class LanguagePickerComponent {
  constructor(private translationsService: TranslationsService) {
    this.optionModel = this.options.find(
      (x) => x.name === this.translationsService.getCurrentLanguage()
    )!;
  }
  options = [
    { name: 'en', icon: 'assets/svg/eng.svg' },
    { name: 'pl', icon: 'assets/svg/pl.svg' },
  ] as { name: 'en' | 'pl'; icon: string }[];
  _optionModel: any;
  set optionModel(val: { name: 'en' | 'pl'; icon: string }) {
    this._optionModel = val;
    this.translationsService.changeLanguage(val.name);
  }
  get optionModel() {
    return this._optionModel;
  }
}
