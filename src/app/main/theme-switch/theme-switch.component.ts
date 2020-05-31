import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {
  darkTheme = true;

  changeTheme(): void {
    this.darkTheme = !this.darkTheme;
    if (document.body.className === 'mat-typography mat-app-background dark-theme') {
      document.body.className = 'mat-typography mat-app-background light-theme';
    } else { document.body.className = 'mat-typography mat-app-background dark-theme'; }
  }
}
