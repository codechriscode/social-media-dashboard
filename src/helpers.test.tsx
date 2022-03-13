import {
  roundNum,
  getArrowName,
  getColor,
  calcPeriod,
  commaSeparate,
} from "./helpers";

describe("Helpers", () => {
  test("Positive/negative growth arrow", () => {
    expect(getArrowName(0)).toStrictEqual("");
    expect(getArrowName(102)).toEqual("up");
    expect(getArrowName(-3)).toEqual("down");
  });

  test("Number rounding", () => {
    expect(roundNum(1232)).toStrictEqual("1232");
    expect(roundNum(12344)).toEqual("12k");
    expect(roundNum(123456)).toEqual("123k");
    expect(roundNum(1234567)).toEqual("1M");
    expect(roundNum(12345678)).toEqual("12M");
    expect(roundNum(123456789)).toEqual("123M");
    expect(roundNum(1234567890)).toEqual("1B");
  });

  test("Dates are correctly calculated", () => {
    expect(calcPeriod(2)).toEqual("Last 2 days");
    expect(calcPeriod(-3)).toEqual("Today");
    expect(calcPeriod(0)).toEqual("Today");
  });

  test("Correct change coloring", () => {
    expect(getColor(-10)).toEqual("--change-negative");
    expect(getColor(0)).toStrictEqual("");
    expect(getColor(84)).toEqual("--change-positive");
  });

  test("Number comma insertion", () => {
    expect(commaSeparate(3745673)).toStrictEqual("3,745,673");
    expect(commaSeparate(1134.9002)).toStrictEqual("1,134.9002");
  });
});
