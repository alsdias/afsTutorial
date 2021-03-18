import { Person } from './person.model';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person('Mary Test', 1, '123 123')).toBeTruthy();
  });
});
