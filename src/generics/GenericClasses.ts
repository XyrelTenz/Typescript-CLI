// generics/03-advanced-generic-classes.ts
/**
 * This file demonstrates a generic class.
 *
 * BEHAVIOR:
 * The `GenericCollection<T>` class is a type-safe wrapper around an array.
 * The type parameter `T` is defined at the class level, meaning it applies
 * to the entire class and all its instances.
 *
 * When you create an instance, you specify the type it will hold, for example:
 * `new GenericCollection<number>()` or `new GenericCollection<string>()`.
 *
 * All methods (`add`, `get`, `getAll`) within the class can then use `T`. This
 * provides complete type safety. An instance created for `number` can only have
 * numbers added to it, and its `get` method will always return a `number`.
 *
 * POSSIBLE USE CASES:
 * - Implementing general-purpose data structures: Stacks, Queues, Linked Lists,
 * Binary Trees.
 * - Creating a type-safe API client that can fetch different types of data
 * (e.g., `ApiClient<User>`, `ApiClient<Product>`).
 * - Building state management stores that hold specific types of data.
 */

class GenericCollection<T> {
  private items: T[] = [];

  // Add an item of type T to the collection
  add(item: T): void {
    this.items.push(item);
  }

  // Get an item by index, returns T or undefined
  get(index: number): T | undefined {
    return this.items[index];
  }

  // Get all items as an array of T
  getAll(): T[] {
    return this.items;
  }
}

// --- Examples ---

// Example 1: A collection of numbers
console.log("--- Number Collection ---");
const numberCollection = new GenericCollection<number>();
numberCollection.add(10);
numberCollection.add(20);
// numberCollection.add("30"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const firstNum = numberCollection.get(0);
console.log(`First number: ${firstNum?.toFixed(2)}`); // We can safely call number methods
console.log(`All numbers: ${numberCollection.getAll()}`);

// Example 2: A collection of user objects
console.log("\n--- User Collection ---");
type User = { name: string; age: number };
const userCollection = new GenericCollection<User>();
userCollection.add({ name: "Alice", age: 30 });
userCollection.add({ name: "Bob", age: 42 });
const firstUser = userCollection.get(0);
console.log(`First user's name: ${firstUser?.name}`);
console.log(`All users:`, userCollection.getAll());
