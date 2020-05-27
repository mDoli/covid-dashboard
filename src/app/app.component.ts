import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashb-app';
  lightTheme = false;

  changeTheme() {
    this.lightTheme = !this.lightTheme;
  }
}
