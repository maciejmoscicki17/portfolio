import { Component, OnInit } from '@angular/core';
import { ScreenSizeEnum } from '../../enums/screen-size';
import { ScreenSizeService } from '../../services/screen-size.service';
import { ContentComponent } from '../content/content.component';
import { HeaderComponent } from '../header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ToastComponent } from '../toast/toast.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContentComponent,
    ToastComponent,
    ProgressBarComponent,
    NotFoundComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
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
