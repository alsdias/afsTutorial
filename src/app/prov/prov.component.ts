import { Component, OnInit } from '@angular/core';
import { DbService } from '../model/db.service';
// import { PersonRegistry } from '../model/person-registry.model';

@Component({
  selector: 'app-prov',
  templateUrl: './prov.component.html',
  styleUrls: ['./prov.component.css']
})
export class ProvComponent implements OnInit {

  // db: DbService;
  // persons: string[];

  // constructor(fakeDb: DbService) {
  constructor() {
    // this.db = fakeDb;
    // this.loadAllPersons();
  }

  ngOnInit(): void {
  }

  // getPersons(): PersonRegistry[] {
  //   return this.db.allPersons();
  // }

  // loadAllPersons(): void {
  //   const registries = this.db.allPersons();
  //   registries.forEach(reg => { this.persons.push(reg.print()); });
  // }

}
