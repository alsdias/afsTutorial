import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  title = 'afsTutorial';
  siteBadge = '../assets/img/afstutorial_main_image.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
