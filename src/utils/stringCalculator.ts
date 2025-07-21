export function add(input: string): number {
  if (input === "") return 0;

  let delimiterRegex = /,|\n/;
  let numbers = input;

  // Check for custom delimiter
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    const delimiter = input.substring(2, delimiterEndIndex);
    delimiterRegex = new RegExp(delimiter);
    numbers = input.substring(delimiterEndIndex + 1);
  }

  const numArray = numbers.split(delimiterRegex);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
