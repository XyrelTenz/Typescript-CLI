/**
 * ==============================================================
 * 🧠 TypeScript Built-in Syntax — Mini Handbook
 * ==============================================================
 * Contains 20 key TypeScript features with examples + use cases.
 * ==============================================================
 */

/* ==============================================================
  1️⃣ Basic Types
============================================================== */
let username: string = "Xyrel";
let age: number = 18;
let isAdmin: boolean = true;

function greet(user: string, age: number): string {
  return `Hello ${user}, you are ${age} years old.`;
}
console.log(greet(username, age));

/* ==============================================================
  2️⃣ Interfaces
============================================================== */
interface User {
  id: number;
  name: string;
  email?: string; // optional
}
const user: User = { id: 1, name: "Xyrel" };
console.log(user);

/* ==============================================================
  3️⃣ Type Aliases
============================================================== */
type ID = string | number;
type Status = "active" | "inactive" | "pending";

function setStatus(status: Status) {
  console.log(`Status: ${status}`);
}
setStatus("active");

/* ==============================================================
  4️⃣ Enums
============================================================== */
enum Role {
  Admin,
  Teacher,
  Student,
}
let currentRole: Role = Role.Admin;
if (currentRole === Role.Admin) console.log("✅ Admin access");

/* ==============================================================
  5️⃣ Tuples
============================================================== */
let person: [string, number] = ["Xyrel", 18];
function getUser(): [string, boolean] {
  return ["Admin", true];
}
console.log(getUser());

/* ==============================================================
  6️⃣ Generics
============================================================== */
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("Xyrel"));
console.log(identity<number>(42));

/* ==============================================================
  7️⃣ Union Types
============================================================== */
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}
printId(123);
printId("ABC");

/* ==============================================================
  8️⃣ Intersection Types
============================================================== */
interface Person {
  name: string;
}
interface Contact {
  email: string;
}
type Employee = Person & Contact;
const emp: Employee = { name: "Xyrel", email: "xyrel@example.com" };
console.log(emp);

/* ==============================================================
  9️⃣ Literal Types
============================================================== */
let direction: "up" | "down" | "left" | "right" = "up";
function move(dir: "up" | "down") {
  console.log(`Moving ${dir}`);
}
move("down");

/* ==============================================================
  🔟 Type Assertions
============================================================== */
// const input = document.querySelector("input") as HTMLInputElement; // Browser only example

const data: unknown = "hello";
const strLen = (data as string).length;
console.log("Length:", strLen);

/* ==============================================================
  11️⃣ Never Type
============================================================== */
function throwError(msg: string): never {
  throw new Error(msg);
}

/* ==============================================================
  12️⃣ Unknown Type
============================================================== */
function safeParse(data: string): unknown {
  return JSON.parse(data);
}
const parsed = safeParse('{"name": "Xyrel"}');
if (typeof parsed === "object" && parsed !== null) {
  console.log("Parsed object:", parsed);
}

/* ==============================================================
  13️⃣ Readonly
============================================================== */
interface Profile {
  readonly id: number;
  name: string;
}
const profile: Profile = { id: 1, name: "Xyrel" };
// profile.id = 2 ❌ Error
console.log(profile);

/* ==============================================================
  14️⃣ Optional Chaining (?.)
============================================================== */
interface Student {
  name: string;
  grades?: { math?: number };
}
const s1: Student = { name: "Xyrel" };
console.log(s1.grades?.math ?? "No grade");

/* ==============================================================
  15️⃣ Nullish Coalescing (??)
============================================================== */
let username2: string | null = null;
let displayName = username2 ?? "Guest";
console.log("Welcome", displayName);

/* ==============================================================
  16️⃣ keyof Operator
============================================================== */
interface Product {
  id: number;
  name: string;
}
type ProductKeys = keyof Product; // "id" | "name"
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
console.log(getProperty({ id: 1, name: "Laptop" }, "name"));

/* ==============================================================
  17️⃣ Mapped Types
============================================================== */
interface Account {
  username: string;
  password: string;
}
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K];
};
const acc: ReadonlyAccount = { username: "xyrel", password: "123" };
console.log(acc);

/* ==============================================================
  18️⃣ Conditional Types
============================================================== */
type ResponseType<T> = T extends string ? "text" : "json";
function fetchData<T>(input: T): ResponseType<T> {
  return (typeof input === "string" ? "text" : "json") as ResponseType<T>;
}
console.log(fetchData("api")); // "text"
console.log(fetchData(42)); // "json"

/* ==============================================================
  19️⃣ Infer Keyword
============================================================== */
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
function sayHello() {
  return "Hi Xyrel!";
}
type Greeting = ReturnTypeOf<typeof sayHello>;
const msg: Greeting = sayHello();
console.log(msg);

/* ==============================================================
  20️⃣ Utility Types (Partial, Pick, Omit, Record)
============================================================== */
interface UserAccount {
  id: number;
  name: string;
  email: string;
}
type PartialUser = Partial<UserAccount>;
type PickedUser = Pick<UserAccount, "name">;
type OmittedUser = Omit<UserAccount, "email">;
type UserRole = Record<string, string>;

const partial: PartialUser = { name: "Xyrel" };
const picked: PickedUser = { name: "Xyrel" };
const record: UserRole = { admin: "true" };
console.log(partial, picked, record);

/* ==============================================================
 ✅ End of File — TypeScript Core Concepts Summary
============================================================== */
