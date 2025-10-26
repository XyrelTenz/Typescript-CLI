interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;

  constructor(animal: Animal) {
    this.resident = animal;
  }
}

export class DogHouse extends AnimalHouse {
  // To indicate that there should be no runtime effect for this field declartions
  declare resident: Dog;

  constructor(dog: Dog) {
    super(dog);
  }
}

// This TYPES
export class Box {
  contents: string = "";
  set(value: string) {
    this.contents = value;
    return this;
  }
}

// Subclass
export class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}

export class Boxes {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}

export class DerivedBox extends Boxes {
  otherContent: string = "?";
}

// This - Based Type Guards
interface Network {
  host: string;
}

export class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Network & this {
    return this.networked;
  }
  constructor(
    public path: string,
    private networked: boolean,
  ) {}
}

export class FileRep extends FileSystemObject {
  constructor(
    path: string,
    public content: string,
  ) {
    super(path, false);
  }
}
class Directory extends FileSystemObject {
  //Property Initializer
  children: FileSystemObject[] = [];
}

export class Box2<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

// Parameter Properties

export class Params<T> {
  constructor(
    public readonly x: T,
    protected y: T,
    private z: T,
  ) {}

  // sum(): T {
  //   return this.x + this.y + this.z;
  // }
}
