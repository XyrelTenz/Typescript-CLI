// Check if argument is Number
// Otherwise otherwise String
function isNumber(x: any): x is number {
  return typeof x === "number";
}

export function sumNNumbers<T extends number | string>(
  a: T,
  b: T,
): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  return (+a + +b).toString();
}
