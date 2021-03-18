import { PersonRegistry } from './person-registry.model';

export class PersonTable {

  personRegistries: PersonRegistry[];

  constructor() {
    // populates
    this.personRegistries = PersonRegistry.genFakeRegistries();
  }

}
