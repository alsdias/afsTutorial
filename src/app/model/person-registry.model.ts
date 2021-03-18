import { Person } from './person.model';

export class PersonRegistry {
  id: number;
  person: Person;
  isDeleted: boolean;

  constructor(id: number, person: Person) {
    this.id = id;
    this.person = person;
    this.isDeleted = false;
  }

  static genFakeRegistries(): PersonRegistry[] {
    const registries = [];
    registries.push(new PersonRegistry(1, new Person('Mary Doe', 30, '123 123')));
    registries.push(new PersonRegistry(2, new Person('John Doe', 31, '123 123')));
    registries.push(new PersonRegistry(3, new Person('Helen Doe', 12, '123 123')));
    return registries;
  }

  print(): string {
    return this.id + ', ' + this.person.print() + ', ' + this.isDeleted;
  }

}
