// Type Argument

function Identity<T>(arg: T): T {
  return arg;
}

let output = Identity<string>("Hello World");
console.log(output);

// Type Argument with Interface

interface Pair<T, U> {
  name: T;
  age: U;
}

let pairs: Pair<string, number> = {
  name: "Xyrel",
  age: 18,
};

console.log(pairs);

//Type Argument with Class

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

let box = new Box("Hello");
console.log(box.getValue());

//Type Argument with Multiple Constraints

interface LengthWise {
  length: number;
}

function LoggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

LoggingIdentity("Xyrel");

//Type Argument with Default Type
function createPair<T = string, U = number>(): Pair<T, U> {
  return Pair<T, U>;
}
let defaultPair = createPair();
console.log(defaultPair);
