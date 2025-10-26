/**
 * Flatten Type
 */

type Flatten<T> = T extends any[] ? T[number] : T;

// ✅ Type tests
type A = Flatten<string[]>; // string
type B = Flatten<number>; // number

// 🧪 Example usage
function first<T>(arr: T): Flatten<T> {
  if (Array.isArray(arr)) {
    return arr[0] as Flatten<T>;
  }
  return arr as Flatten<T>;
}

console.log(first([10, 20, 30])); // 10
console.log(first("hello")); // hello
