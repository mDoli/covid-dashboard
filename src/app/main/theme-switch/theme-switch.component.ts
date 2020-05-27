import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {
  darkTheme = true;
  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    this.darkTheme = !this.darkTheme;
    if (document.body.className === 'mat-typography mat-app-background dark-theme') {
      document.body.className = 'mat-typography mat-app-background light-theme';
    } else { document.body.className = 'mat-typography mat-app-background dark-theme'; }
  }
}
