import { Component, OnInit } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';
import { DescriptionComponent } from '../description/description.component';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, TerminalComponent, DescriptionComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements OnInit {
  isCompact = this.screenSizeService.isCompact;
  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.screenSizeService.$isCompact().subscribe((compact) => {
      this.isCompact = compact;
    });
  }
}
