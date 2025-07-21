import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
 test("handles new lines between numbers as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

});
