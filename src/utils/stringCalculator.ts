export function add(input: string): number {
  if (input === "") return 0;

  let delimiterRegex = /,|\n/;
  let numbers = input;

  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    const delimiter = input.substring(2, delimiterEndIndex);
    delimiterRegex = new RegExp(delimiter);
    numbers = input.substring(delimiterEndIndex + 1);
  }

  const numArray = numbers.split(delimiterRegex).map(Number);

  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
