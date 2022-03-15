import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title: string;

  handleKeyUp(e: Event) {
    const target = e.target as HTMLInputElement;
    this.submit.emit(target.value);
  }

  handleClick(newTitle: string) {
    this.submit.emit(newTitle);
  }

  constructor() {
    this.title = ""
  }
  
  

 ngOnInit(): void {

}

}
