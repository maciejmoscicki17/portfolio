import { Component } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [TerminalComponent, DescriptionComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {}
