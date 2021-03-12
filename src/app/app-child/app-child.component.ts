import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

  @Input() myName: string; // the child will get its name from the parent, like  "human lives", but not really - just as an example.

  @Output() newItemEvent = new EventEmitter<string>();

  sportItens = ['ball', 'football boots', 'shirt', 'shorts', 'sockets'];

  @Input()  sportCode: number;
  @Output() sportCodeChange = new EventEmitter<number>();

  @Input()  sportItem: string;
  @Output() sportItemChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }

  inc(): void {
    this.sportCode  += 1;
    this.nextCode(this.sportCode);
    this.nextItem(this.sportCode);
  }

  nextCode(num: number): void {
    this.sportCode =  (this.sportCode % 5);
    this.sportCodeChange.emit(this.sportCode);
  }

  nextItem(idx: number): void {
    this.sportItem = this.sportItens[idx];
    this.sportItemChange.emit(this.sportItem);
  }

}
