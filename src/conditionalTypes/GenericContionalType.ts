/**
 * Conditional Type with Generics
 */

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(value: T): NameOrId<T> {
  return (
    typeof value === "number" ? { id: value } : { name: value }
  ) as NameOrId<T>;
}

// ✅ Usage
const a = createLabel("typescript"); // { name: "typescript" }
const b = createLabel(7); // { id: 7 }

console.log(a);
console.log(b);
