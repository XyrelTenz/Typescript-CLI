// Class Expression
const Student = class<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
};

const m = new Student("Student");
