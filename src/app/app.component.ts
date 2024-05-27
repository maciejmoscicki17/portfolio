import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ToastComponent } from './components/toast/toast.component';
import { ScreenSizeService } from './services/screen-size.service';
import { ScreenSizeEnum } from './enums/screen-size';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ContentComponent,
    ToastComponent,
    ProgressBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  screenSize: ScreenSizeEnum;
  firstLoad = true;
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSize = this.screenSizeService.screenType;
    document.title = "Maciek's Portfolio";
  }
  ngOnInit(): void {
    this.screenSizeService.$screenType().subscribe((size) => {
      this.screenSize = size;
    });
  }
}
