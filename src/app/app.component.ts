import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  name: string = "";
  addItem(newItem: string) {
    this.name = newItem;
  }
 name1 : string ="thanh do" 
 
  title = 'AngularIndex';
}
