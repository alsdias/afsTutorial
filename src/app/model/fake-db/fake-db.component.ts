import { Component, OnInit } from '@angular/core';
import { PersonTable } from '../person-table.model';
import { PersonRegistry } from '../person-registry.model';
import { Person } from '../person.model';

@Component({
  selector: 'app-fake-db',
  templateUrl: './fake-db.component.html',
  styleUrls: ['./fake-db.component.css']
})
export class FakeDBComponent implements OnInit {

  personTable: PersonTable;

  constructor() {
    // populating table
    this.personTable.personRegistries.push(new PersonRegistry(1, new Person('Mary Doe', 30, '123.123')));
    this.personTable.personRegistries.push(new PersonRegistry(2, new Person('John Doe', 31, '123.124')));
  }

  ngOnInit(): void {
  }

  findAll(): PersonRegistry[] {
    return this.personTable.personRegistries;
  }

  findById(id: number): PersonRegistry {
    for (const idx in this.personTable ) {
      if (this.personTable[idx].id === id) {
        return this.personTable[idx];
      }
    }
    return null;
  }

  insert(name: string, age: number, doc: string): void {
    this.personTable.personRegistries.push(new PersonRegistry(2, new Person(name, age, doc)));
  }
}
