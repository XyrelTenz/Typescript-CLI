/**
 * Conditional Type Constraints
 */

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}

type EmailMessage = MessageOf<Email>; // string
type DogMessage = MessageOf<Dog>; // never

// 🧪 Function example
function getMessage<T>(input: T): MessageOf<T> {
  if ("message" in (input as any)) {
    return (input as any).message;
  }
  throw new Error("No message property!");
}

console.log(getMessage({ message: "Hello!" })); // ✅ Works
// console.log(getMessage({ bark: () => {} })); // ❌ Type error
