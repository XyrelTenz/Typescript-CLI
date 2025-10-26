// generics/04-advanced-keyof-constraint.ts
/**
 * This file demonstrates using the `keyof` type operator as a generic constraint.
 *
 * BEHAVIOR:
 * The `getProperty` function is designed to safely access a property on an object.
 * It has two generic types:
 * - `T`: Represents the type of the object.
 * - `K extends keyof T`: This is the key. `keyof T` creates a union type of all
 * property names (keys) of `T`. The constraint `extends keyof T` ensures that
 * the `key` argument passed to the function *must* be an actual key of the
 * object `obj`.
 *
 * The return type of the function is `T[K]`, which is a "lookup type". It means
 * "the type of the property `K` on the object `T`". This makes the function's
 * return value perfectly typed.
 *
 * POSSIBLE USE CASES:
 * - Creating utility functions for data extraction and manipulation.
 * - Building type-safe data grids or tables where you might specify column keys as strings.
 * - Implementing plucking functions found in libraries like Lodash or Ramda.
 */

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// --- Examples ---

const user = {
  name: "Charlie",
  age: 35,
  isAdmin: true,
};

// Example 1: Get the 'name' property (string)
const userName = getProperty(user, "name");
console.log(`User's name is ${userName}. Type: ${typeof userName}`); // string

// Example 2: Get the 'age' property (number)
const userAge = getProperty(user, "age");
console.log(`User's age is ${userAge}. Type: ${typeof userAge}`); // number

// Example 3: Get the 'isAdmin' property (boolean)
const isAdmin = getProperty(user, "isAdmin");
console.log(`Is admin? ${isAdmin}. Type: ${typeof isAdmin}`); // boolean

// Example 4: This would cause a compile-time error because 'location' is not a key of user
// const userLocation = getProperty(user, "location"); // Error: Argument of type '"location"' is not assignable to
// parameter of type '"name" | "age" | "isAdmin"'.
