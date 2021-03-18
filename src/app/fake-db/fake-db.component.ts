import { Component, OnInit } from '@angular/core';
import { DbService } from '../model/db.service';
import { PersonRegistry } from '../model/person-registry.model';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-fake-db',
  templateUrl: './fake-db.component.html',
  styleUrls: ['./fake-db.component.css']
})
export class FakeDbComponent implements OnInit {

  siteBadge = '../assets/img/sitebadge_step6.jpg';
  db: DbService;
  persons: string[];
  todaydate: Date;

  constructor(private dbsvc: DbService) {
    this.db = dbsvc;
    this.allPersons();
  }

  ngOnInit(): void {
  }

  allPersons(): void {
    this.persons = [];
    const regs = this.db.allPersons();
    regs.forEach(reg => { this.persons.push(reg.print()); });
  }

}
