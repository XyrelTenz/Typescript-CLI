// generics/01-beginner-identity-function.ts
/**
 * This file demonstrates the most basic form of a generic function.
 *
 * BEHAVIOR:
 * The identity function uses a type variable `<T>`. This `T` acts as a
 * placeholder for a type that will be specified when the function is called.
 * - It accepts an argument of type `T`.
 * - It returns a value of type `T`.
 *
 * The key benefit is that TypeScript understands the relationship between the
 * input and output types. If you pass a `number`, it knows the return type
 * is `number`. If you pass a `string`, it knows the return type is `string`.
 * This preserves type information, which would be lost if we used `any`.
 *
 * POSSIBLE USE CASES:
 * - Utility functions that need to work with a variety of types while
 * maintaining type safety.
 * - The foundation for more complex generic data structures and functions.
 * - Wrapping or logging function arguments without losing their type.
 */

function identity<T>(arg: T): T {
  return arg;
}

// --- Examples ---

// Example 1: Passing a string
// TypeScript infers that `T` is `string`.
let outputString = identity("hello generics");
console.log(`String example: ${outputString.toUpperCase()}`); // .toUpperCase() is allowed

// Example 2: Passing a number
// TypeScript infers that `T` is `number`.
let outputNumber = identity(123);
console.log(`Number example: ${outputNumber.toFixed(2)}`); // .toFixed() is allowed

// Example 3: Passing an object
type User = { name: string; id: number };
const user: User = { name: "Alice", id: 1 };
let outputUser = identity(user);
console.log(`Object example: User name is ${outputUser.name}`);

// Example of what would be an error if we used `any`:
function identityAny(arg: any): any {
  return arg;
}
let unsafeOutput = identityAny("this is unsafe");
// unsafeOutput.toUpperCase(); // TypeScript compiler would not offer autocompletion
// or type checking here, because `unsafeOutput` is `any`.
