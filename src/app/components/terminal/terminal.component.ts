import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
  isMobile = this.screenSizeService.isMobile;
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSizeService
      .$isMobile()
      .subscribe((isMobile) => (this.isMobile = isMobile));
  }
  skills = [
    'Angular',
    '.NET',
    'C#',
    'Firebird',
    'C++',
    'Git',
    'Sql',
    'CSS',
    'HTML',
  ];
}
