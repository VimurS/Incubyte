import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
 test("throws error when negative numbers are present", () => {
  expect(() => add("1,-2,3,-4")).toThrow(
    "negative numbers not allowed -2,-4"
  );
});

});
