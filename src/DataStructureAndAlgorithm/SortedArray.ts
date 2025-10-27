export function SortingArray(arr: number[]): number[] {
  let arrays: number[] = [...arr];

  for (let i = 0; i <= arrays.length; i++) {
    let temp: number = i;
    for (let j = i + 1; j <= arrays.length; j++) {
      if (arrays[i]! < arrays[j]!) {
        temp = j;
      }
      [arrays[i], arrays[temp]] = [arrays[temp]!, arrays[i]!];
    }
  }
  return arrays;
}

// const arrays: number[] = [4, 2, 3, 7, 1];
// console.log(SortingArray(arrays));
