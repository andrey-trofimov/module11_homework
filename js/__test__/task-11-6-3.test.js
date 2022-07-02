import { reversString } from "../task-11-6-3";

describe("test for revers stroke function", () => {
  const testStroke = "Stroke";
  const testNumber = 123;

  it('expect proper result with "Stroke" and 123', () => {
    expect(reversString(testStroke)).toBe("ekortS");
    expect(reversString(testNumber)).toBe("Введен не строковый тип данных");
  });
});
