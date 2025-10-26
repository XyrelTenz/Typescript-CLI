// generics/06-pro-mapped-types.ts
/**
 * This file demonstrates Mapped Types for transforming object types.
 *
 * BEHAVIOR:
 * A mapped type uses the syntax `[P in keyof T]: ...` to iterate through all
 * the keys (`P`) of a given type (`T`) and define a new type for each key.
 * This lets you programmatically create new object types from existing ones.
 *
 * Here, we implement our own version of the built-in `Partial<T>` utility type.
 * Our `MyPartial<T>` takes a type `T` and makes all of its properties optional.
 * - `[P in keyof T]` iterates over each property name `P` in `T`.
 * - `?` makes the new property optional.
 * - `T[P]` gets the original type of that property.
 *
 * We also show how to create a `Stringify<T>` type that converts all property
 * types of an object to `string`.
 *
 * POSSIBLE USE CASES:
 * - Creating variations of a base type, like making all properties readonly
 * (`Readonly<T>`), optional (`Partial<T>`), or required (`Required<T>`).
 * - Building form state types where all fields might initially be strings
 * before being parsed.
 * - Generating types for API patch/update endpoints where only a subset of
 * properties may be present.
 */

// Makes all properties of T optional
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Makes all property types of T into `string`
type Stringify<T> = {
  [P in keyof T]: string;
};

// --- Examples ---

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Example 1: Using MyPartial<User>
// `partialUser` can have any subset of User's properties.
const partialUser: MyPartial<User> = {
  name: "Diana",
  email: "diana@example.com",
};
console.log("Partial User:", partialUser);

// This is also valid, as all properties are optional
const anotherPartialUser: MyPartial<User> = {};
console.log("Another Partial User:", anotherPartialUser);

// Example 2: Using Stringify<User>
// `stringifiedUser` must have all keys of User, but their values must be strings.
const stringifiedUser: Stringify<User> = {
  id: "101",
  name: "Evan",
  email: "evan@example.com",
  isAdmin: "false", // Note: the boolean is now a string
};
console.log("Stringified User:", stringifiedUser);
