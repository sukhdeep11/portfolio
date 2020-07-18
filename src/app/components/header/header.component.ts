import { Component, OnInit } from '@angular/core';
import { ThemeService } from "src/app/shared/theme/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  themeDark = false;

  toggleTheme() {
    this.themeDark = !this.themeDark;
  }

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

  // if (false) {
  //   this.themeService.setLightTheme();
  // } else {
  //   this.themeService.setDarkTheme();
  // }

}
