import { describe, expect, test } from "vitest";

const person = {
  isActive: false,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefned();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
