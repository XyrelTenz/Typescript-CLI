export class StackArray<T> {
  private Items: T[] = [];
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  isEmpty(): boolean {
    return this.Items.length === 0;
  }

  isFull(): boolean {
    return this.Items.length === this.size;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.Items.pop();
  }

  push(element: T): void {
    if (this.isFull()) {
      throw new Error("Stack is full");
    }
    this.Items.push(element);
  }

  display(): void {
    console.log(this.Items);
  }
}
