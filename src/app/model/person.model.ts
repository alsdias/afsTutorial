export class Person {

  public name: string;
  public age: number;
  public doc: string;

  constructor(name: string, age: number, doc: string){
      this.name = name;
      this.age = age;
      this.doc = doc;
  }

  print(): string {
    return this.name + ', ' + this.age + ',' + this.doc;
  }
}
