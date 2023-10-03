const { initArrayTap } = require("./index");

const capture = (val) => (capture.last = val);

const clean = (name) => {
  capture.last = null;
  delete Array.prototype[name];
};

describe("tap", () => {
  it("works without init call", () => {
    const actual = ["Alice", "in", "wonderland"]
      .map((str) => str.length)
      .tap(capture)
      .filter((n) => n > 3);
    expect(capture.last).toEqual([5, 2, 10]);
    expect(actual).toEqual([5, 10]);
    clean("tap");
  });

  it("works with default init call", () => {
    initArrayTap();
    const actual = ["Quick", "fox"]
      .map((str) => str.length)
      .tap(capture)
      .filter((n) => n > 3);
    expect(capture.last).toEqual([5, 3]);
    expect(actual).toEqual([5]);
    clean("tap");
  });

  it("init accepts name argument", () => {
    const tap = Symbol("tap");
    initArrayTap(tap);
    const actual = ["Lost", "in", "translation"]
      .map((str) => str.length)
      [tap](capture)
      .filter((n) => n > 3);
    expect(capture.last).toEqual([4, 2, 11]);
    expect(actual).toEqual([4, 11]);
    clean(tap);
  });

  it("doesn't overwrite properties", () => {
    initArrayTap("map");
    const actual = ["Message", "in", "a", "bottle"]
      .map((str) => str.length)
      .filter((n) => n > 3);
    expect(actual).toEqual([7, 6]);
  });
});
