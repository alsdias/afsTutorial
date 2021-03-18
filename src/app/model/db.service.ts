import { Injectable, OnInit  } from '@angular/core';
import { PersonRegistry } from './person-registry.model';
import { PersonTable } from './person-table.model';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  personTable: PersonTable;

  constructor() {
    this.personTable = new PersonTable();
  }

  allPersons(): PersonRegistry[] {
    return this.personTable.personRegistries;
  }

  findPersonById(id: number): PersonRegistry {
    let pr = null;
    for (const idx in this.personTable.personRegistries) {
      if (this.personTable.personRegistries[idx].id === id) {
        pr = this.personTable.personRegistries[idx];
      }
    }
    return pr;
  }

  insert(name: string, age: number, doc: string): void {
    this.personTable.personRegistries.push(new PersonRegistry(2, new Person(name, age, doc)));
  }

}

