import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() menuItems: string[] = [];
  @Output() menuItemSelected = new EventEmitter<string>();

  onMenuItemClick(menuItem: string) {
    this.menuItemSelected.emit(menuItem);
  }
}
