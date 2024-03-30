import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ToastComponent } from './components/toast/toast.component';
import { ScreenSizeService } from './services/screen-size.service';
import { ScreenSizeEnum } from './enums/screen-size';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ContentComponent,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  screenSize: ScreenSizeEnum;
  constructor(private screenSizeService: ScreenSizeService) {
    this.screenSize = this.screenSizeService.screenType;
    document.title = 'Macieks Portfolio';
  }
  ngOnInit(): void {
    this.screenSizeService.$screenType().subscribe((size) => {
      this.screenSize = size;
    });
  }
  title = 'portfolio';
}
