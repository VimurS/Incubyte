import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
 test("supports custom delimiter syntax", () => {
  expect(add("//;\n1;2")).toBe(3);
});

});
