import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ColorThemeService } from '../../services/color-theme.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent implements OnInit {
  theme: 'dark' | 'light' = 'dark';
  ngOnInit(): void {
    this.theme = this.themeService.currentTheme;
  }
  private router = inject(Router);
  private themeService = inject(ColorThemeService);
  onClick() {
    this.router.navigateByUrl('/');
  }
}
