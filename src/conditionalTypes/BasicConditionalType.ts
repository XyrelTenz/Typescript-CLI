/**
 * Basic Conditional Types Example
 * Docs: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// ✅ Basic conditional types
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

// Syntax reminder:
// SomeType extends OtherType ? TrueType : FalseType;
