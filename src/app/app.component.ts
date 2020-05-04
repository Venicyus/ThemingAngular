import { Component, OnInit } from '@angular/core';
import { ThemeService, ThemeType } from 'src/app/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  theme: string;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme = this.themeService.theme;
  }

  onAlternateTheme() {
    this.themeService.theme === ThemeType.Light ? this.themeService.addThemeDark() : this.themeService.addThemeLight();
    this.theme = this.themeService.theme;
  }

}
