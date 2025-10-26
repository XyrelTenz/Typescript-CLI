/**
 * Using `infer` Keyword
 */

// ✅ Infer element type from array
type ElementOf<T> = T extends (infer U)[] ? U : T;

// ✅ Infer return type from function
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

function sum(a: number, b: number): number {
  return a + b;
}

type ElementExample = ElementOf<string[]>; // string
type ReturnExample = ReturnOf<typeof sum>; // number

const arr: ElementExample[] = ["A", "B"];
const result: ReturnExample = sum(3, 4);

console.log(arr);
console.log(result);
