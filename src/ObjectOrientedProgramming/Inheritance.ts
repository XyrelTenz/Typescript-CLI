export interface Student {
  id: number;
  name: string;
  grade: number;
}

export interface Teacher<T> {
  id: T;
  name: T;
  subject: T;
}

export class Repository<T extends { id: number }> {
  private items: T[];

  constructor(initialData: T[] = []) {
    this.items = initialData;
  }

  // Apend Method
  Add(item: T): void {
    this.items.push(item);
  }

  //Get Method
  GetAll() {
    return this.items;
  }

  // Update method
  Update(id: number, newtItem: Partial<T>): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index == -1) {
      this.items[index] = {
        ...this.items[index],
        ...newtItem,
      } as T;
    }
  }

  // Delete Method
  Delete(id: number): void {
    this.items = this.items.filter((items) => items.id != id);
  }
}
