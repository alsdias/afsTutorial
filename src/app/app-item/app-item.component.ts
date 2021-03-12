import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})
export class AppItemComponent implements OnInit {

  @Input() item: string;
  @Output() deleteRequest = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  del(): void {
    this.deleteRequest.emit();
  }

}
