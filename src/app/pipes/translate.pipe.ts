import { Pipe, PipeTransform } from '@angular/core';
import { TranslationsService } from '../services/translations.service';

@Pipe({ name: 'translate', pure: false, standalone: true })
export class TranslatePipe implements PipeTransform {
  constructor(private translationsService: TranslationsService) {}

  transform(value: string): string {
    return this.translationsService.translate(value);
  }
}
