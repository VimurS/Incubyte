import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself if only one number is given", () => {
    expect(add("1")).toBe(1);
  });
});
