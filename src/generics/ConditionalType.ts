// generics/05-pro-conditional-types.ts
/**
 * This file demonstrates Conditional Types, an advanced generic feature.
 *
 * BEHAVIOR:
 * Conditional types use a ternary-like syntax: `SomeType extends OtherType ? TrueType : FalseType;`
 * They allow TypeScript to make decisions about types at compile time.
 *
 * Here, we define a utility type `Unwrap<T>`. Its purpose is to:
 * - If `T` is an array of some type (`SomeType[]`), it resolves to `SomeType`.
 * - If `T` is a Promise of some type (`Promise<SomeType>`), it also resolves to `SomeType`.
 * - Otherwise, it just resolves back to `T`.
 *
 * This is achieved by nesting conditional types. The `infer` keyword is used to
 * capture the inner type (`U`) from the array or Promise.
 *
 * POSSIBLE USE CASES:
 * - Creating advanced utility types for libraries and frameworks.
 * - Flattening or unwrapping complex nested types (arrays, promises).
 * - Defining function return types that depend on the input types. For example, a
 * function that returns a Promise's value if given a Promise, or the value itself otherwise.
 */

// If T is an array of some inferred type U, return U. Otherwise, return T.
type UnwrapArray<T> = T extends (infer U)[] ? U : T;

// If T is a promise of some inferred type U, return U. Otherwise, return T.
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// A combined utility type that unwraps arrays and promises
type Unwrap<T> = UnwrapPromise<UnwrapArray<T>>;

// --- Examples ---

// Example 1: Unwrapping an array type
type NumArray = number[];
type UnwrappedNum = Unwrap<NumArray>; // Type is `number`
const num: UnwrappedNum = 10;
console.log(`Unwrapped a number[] to: ${typeof num}`);

// Example 2: Unwrapping a promise type
type StringPromise = Promise<string>;
type UnwrappedString = Unwrap<StringPromise>; // Type is `string`
const str: UnwrappedString = "hello";
console.log(`Unwrapped a Promise<string> to: ${typeof str}`);

// Example 3: A type that is not an array or promise remains unchanged
type RegularNumber = Unwrap<number>; // Type is `number`
const regularNum: RegularNumber = 42;
console.log(`Unwrapped a number to: ${typeof regularNum}`);

// Example 4: Unwrapping a nested promise in an array
type PromiseArray = Promise<string>[];
type UnwrappedPromiseArrayItem = Unwrap<PromiseArray>; // Type is `Promise<string>` (only one level of unwrapping)
type FullyUnwrapped = Unwrap<UnwrappedPromiseArrayItem>; // Type is `string`
