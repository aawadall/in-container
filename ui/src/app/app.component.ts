import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = "app title";
  menuItems = ['Home', 'About', 'Contact'];
  selectedMenuItem = '';

  onMenuItemSelected(item: string) {
    this.selectedMenuItem = item;
  }
}
