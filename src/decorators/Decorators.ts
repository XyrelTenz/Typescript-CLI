function Descriptor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: string[]) {
    console.log(propertyKey);

    return originalMethod.apply(this, args);
  };

  return descriptor;
}
export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @Descriptor
  getName() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
  }
}
