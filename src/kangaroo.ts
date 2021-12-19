export default function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  let rest = '';
  if (v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
    rest = 'NO';
  } else {
    rest = 'YES';
  }
  return rest;
}
