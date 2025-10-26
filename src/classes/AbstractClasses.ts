// Abstract class cant be isntantiate with NEW

abstract class Base {
  abstract getName(): string;

  printName(): void {
    console.log(`Hello, ${this.getName()}`);
  }
}

// Make a Derived Class and implement the abstact members
// Like @OVERRIDING if using DART or other Languages

export class DerivedBase extends Base {
  getName() {
    return "Xyrel";
  }
}

// Abstract Construct Signature
// Function that accepts something with a construct signature

export function Greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}

// Relation Between Classes

class Point1 {
  x: number = 0;
  y: number = 0;
}

class Point2 {
  x: number = 0;
  y: number = 0;
}

const p: Point1 = new Point2();

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

class Employee {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.age = age;
    this.name = name;
    this.salary = salary;
  }
}

const p: Person = new Employee("Xyrel", 18, 18000);

// Empty Classes with no Members

class Empty {}

function fn(x: Empty) {}

fn({});
fn(window);
fn(fn);
