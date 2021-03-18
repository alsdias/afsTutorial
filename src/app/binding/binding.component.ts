import { Component,  OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = 'afsTutorial';
  siteBadge = '../assets/img/sitebadge_step3.jpg';
  span = 3;
  buttonDisabled = true;
  childName = 'app-child';
  currentSportItem = '';
  currentSportCode = 0;
  items = ['item1', 'item2', 'item3', 'item4'];
  currentItem = this.items[0];
  bool = false;

  birds = [
    {
      name: 'Eagle #1',
      image: '../assets/img/eagle1.jpg',
    },
    {
      name: 'Eagle #2',
      image: '../assets/img/eagle2.jpg',
    },
  ];

  person = {
    name: 'Mary',
    lastname: 'Doe'
  };

  titleOfParagraph = "Example handling an element's property";

  pHighlight = {
    color: 'darkblue',
    fontSize: '20px',
    background: '#D6DCE6',
  };

  thColor = 'blue';
  thFontSz = '20px';
  thBackground = '#D6DCE6';

  imageSrc = {
    url: '../assets/img/eagle3.jpg',
    title: 'eagle3',
    displayNone: '',
    lineThrough: ''
  };

  constructor() { }

  ngOnInit(): void {
  }


  hello(): void {
    alert('Hello!');
  }

  addItem(newItem: string): void {
    this.items.push(newItem);
  }

  crossOffItem(event: EventEmitter<void>): void {
      this.items.shift();
  }

  nameToUppercase(name: string): void {
    this.person.name = name.toUpperCase();
  }

}
