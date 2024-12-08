export function getPositive(number: string | number): number {
  return Math.max(+number, 0);
}
