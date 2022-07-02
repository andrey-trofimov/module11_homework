import { getMonth } from "../task-2";

describe("test for getMonth function", () => {
  it(`
  expect proper result with numbers from 1 to 12 
  and alert-result with unproper numbers, 
  stroke type and NaN data type.
  `, () => {
    const unProperNum = 13;
    const strokeType = "Summer";
    const nanType = "Summer" / 3;

    expect(getMonth(1)).toBe("январь");
    expect(getMonth(2)).toBe("февраль");
    expect(getMonth(3)).toBe("март");
    expect(getMonth(4)).toBe("апрель");
    expect(getMonth(5)).toBe("май");
    expect(getMonth(6)).toBe("июнь");
    expect(getMonth(7)).toBe("июль");
    expect(getMonth(8)).toBe("август");
    expect(getMonth(9)).toBe("сентябрь");
    expect(getMonth(10)).toBe("октябрь");
    expect(getMonth(11)).toBe("ноябрь");
    expect(getMonth(12)).toBe("декабрь");
    expect(getMonth(unProperNum)).toBe("нет месяца с таким номером");
    expect(getMonth(strokeType)).toBe("нет месяца с таким номером");
    expect(getMonth(nanType)).toBe("нет месяца с таким номером");
  });
});
