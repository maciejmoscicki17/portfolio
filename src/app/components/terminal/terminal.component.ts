import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
})
export class TerminalComponent {
  constructor() {}
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
