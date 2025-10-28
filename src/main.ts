// type Country<NameType, CapitalType> = {
//   name: NameType;
//   capital: CapitalType;
// };

// type Capital = {
//   name: string;
// };

// const country: Country<string, Capital> = {
//   name: "France",
//   capital: {
//     name: "Paris",
//   },
// };

// console.log(country.name);
// console.log(country.capital.name);

import {
  ClearableBox,
  DerivedBox,
  Boxes,
  FileSystemObject,
  FileRep,
  Box2,
  Params,
} from "./classes/Class";

const a = new ClearableBox();
const b = a.set("Hello");
console.log(b);

const base = new Boxes();
const derived = new DerivedBox();
derived.sameAs(base);

//  const fso: FileSystemObject = new FileRep("./foo/bar.txt". "foo");

// if(fso.isFile()){
//   fso.content;
// }else if(fso.isDirectory()){
//   fso.children;
// }else if(fso.isNetworked()){
//   fso.host;
// }

const box = new Box2();
// box.value = 150;

console.log(box.value);
if (box.hasValue()) {
  box.value;
}

const param = new Params(1, 3, 3);
console.log(param.x);
// console.log(param.z);
// console.log(param.y);
// console.log(param.sum());

import { DerivedBase, Greet } from "./classes/AbstractClasses";

const Derived = new DerivedBase();
Derived.printName();

// const g = Greet(DerivedBase);
Greet(DerivedBase);

function sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let asc = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j]! < arr[asc]!) asc = j;
    }
    [arr[i], arr[asc]] = [arr[asc]!, arr[i]!];
  }
  return arr;
}

const array = [1, 4, 2, 3];
console.log(sort(array));

type Person = {
  name: string;
  age: number;
};

type Workers = Person & {
  salary: number;
  position: string;
};

function Introduce(worker: Workers) {
  console.log(
    `Hello, my name is ${worker.name}, I am ${worker.age} years old, my salary is ${worker.salary} and my position is ${worker.position}`,
  );
}

const xyrel: Workers = {
  name: "Xyrel",
  age: 18,
  salary: 50000,
  position: "Fullstack WebDeveloper",
};

console.log(Introduce(xyrel));

// Generics Keyof
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  // PropertyUser's Object with the key values of Name, Age, isAdmin
  return object[key];
}

const PropertyUser = {
  name: "Xyrel",
  age: 18,
  isAdmin: true,
};

const userName: string = getProperty(PropertyUser, "name");
console.log(`User's name is ${userName}, Type: ${typeof userName}`);

//Authentication
type Users<T> = {
  username: T;
  password: T;
};

type Authentication<T extends Users<U>, U> = {
  (users: T): boolean;
};

interface MyUsers extends Users<string> {
  email: boolean | string;
}

const Authenticate: Authentication<MyUsers, string> = (users: MyUsers) => {
  const userdata = {
    username: "Xyrel",
    password: "123123",
    email: "xdemocrito1@gmail.com",
  };
  if (
    users.email != userdata.email ||
    users.username != userdata.username ||
    users.password != userdata.password
  ) {
    return (console.log("Invalid Credentials"), false);
  }
  if (users != null) true;
  return true;
};

const user: MyUsers = {
  username: "Xyrel",
  password: "123123",
  email: "xdemocrito1@gmail.com",
};

const isAuthenticated = Authenticate(user);

setTimeout(() => {
  for (let i = 1; i <= 3; i++) {
    console.log(`Signing in ${i}`);
  }
  if (!isAuthenticated) {
    isAuthenticated;
  }
  console.log("Sucessfully Login....");
}, 1000);

import { User } from "./decorators/Decorators";

const userss = new User("Xyrel", 18);
userss.getName();

import { StackArray } from "./DataStructureAndAlgorithm/StackArray";
const stack = new StackArray<number>(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
stack.pop();
stack.display();

import { SortingArray } from "./DataStructureAndAlgorithm/SortedArray";
const arrays: number[] = [4, 2, 3, 7, 1];
console.log(SortingArray(arrays));

import {
  Repository,
  type Student,
  type Teacher,
} from "./ObjectOrientedProgramming/Inheritance";

const students = new Repository<Student>([
  {
    id: 1,
    name: "Xyrel",
    grade: 90,
  },
]);

console.log(students);

import { sumNNumbers } from "./DataStructureAndAlgorithm/SumNumber";

console.log(sumNNumbers("5", "5"));

import { printId } from "./DataStructureAndAlgorithm/UnionType";

console.log(printId(5));

import { PrintUser } from "./DataStructureAndAlgorithm/InterfacesOptionalProps";

const userInfo = PrintUser({ name: "Xyrel", role: "Web Developer" });

console.log(userInfo);

import { getRole } from "./DataStructureAndAlgorithm/RoleBaseEnum";

console.log(getRole(4));

import { DisplayTuple } from "./DataStructureAndAlgorithm/TupleInfo";

console.log(DisplayTuple(["Xyrel", 18]));

import { wrap } from "./DataStructureAndAlgorithm/GenericsFunction";

console.log(wrap(["Xyrel", "Xyrel"]));
console.log(wrap([1, 3, 4, 5]));

import { config } from "./DataStructureAndAlgorithm/TypeAssertion";

// console.log((config.version = "2.0"));
console.log(config.version);

// const newConfig = (config.version = "2.0");

import { Sum } from "./DataStructureAndAlgorithm/HighOrderFunction";

const result = Sum(10, 5, ({ a, b }) => a + b);
console.log(result);
