import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
 test("returns sum of two numbers separated by a comma", () => {
  expect(add("1,5")).toBe(6);
});
});
