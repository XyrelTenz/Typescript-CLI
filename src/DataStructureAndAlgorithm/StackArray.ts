/*
1. Check if Items is Empty
2. Check if Items is Full
3. Pop the Items into Array
4. Push the Items to Array
5. Dsiplay Items
*/
export class StackArray<T> {
  private items: T[] = [];
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  isempty(): boolean {
    return this.items.length === 0;
  }

  isFull(): boolean {
    return this.items.length === this.size;
  }

  pop(): T | undefined {
    if (this.isFull()) {
      return undefined;
    }

    return this.items.pop();
  }

  push(elements: T): void {
    if (this.isFull()) {
      throw new Error("Items Full");
    }
    this.items.push(elements);
  }

  display(): void {
    console.log(this.items);
  }
}
