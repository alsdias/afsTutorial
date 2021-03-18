import { PersonRegistry } from './person-registry.model';
import { Person } from './person.model';

describe('PersonRegistry', () => {
  it('should create an instance', () => {
    expect(new PersonRegistry(1, new Person('Mary Test', 1, '123 123'))).toBeTruthy();
  });
});
