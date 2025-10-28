// High Order Function
export function Sum(
  a: number,
  b: number,
  calculate: (numbers: { a: number; b: number }) => number,
): number {
  return calculate({ a, b });
}
