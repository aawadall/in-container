import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
selectedMenuItem: any;
onMenuItemSelected($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'ui';
  appTitle = "app title";
}
