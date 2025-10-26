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
