import { Component, Input, inject } from '@angular/core';
import { Project } from '../../../../models/project';
import { ScreenSizeService } from '../../../../services/screen-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent {
  @Input() project!: Project;

  private screenSizeService = inject(ScreenSizeService);
  isCompact = this.screenSizeService.isCompact;
}
