export function add(input: string): number {
  if (input === "") return 0;

  // Split by comma or new line using regex
  const numbers = input.split(/,|\n/);
  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}
