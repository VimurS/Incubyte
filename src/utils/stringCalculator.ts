export function add(input: string): number {
  if (input === "") return 0;

  const numbers = input.split(",");
  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}
