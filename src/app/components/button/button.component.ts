import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  [x: string]: any;
  @Input() item = ''; 
  @Output() newItemEvent = new EventEmitter<string>();
 
  constructor() { }
  ngOnInit(): void {
    
  }
  onClick(){
   alert("Toi ten Trong");
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
 

}
