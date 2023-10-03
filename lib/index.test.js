const { initArrayTap } = require("./index");

// utility for testing
const capture = (val) => (capture.last = val);

// clean changes
const unset = (name) =>
  Object.defineProperty(Array.prototype, name, {
    writable: true,
    value: undefined,
  });

describe("tap", () => {
  it("works without init call", () => {
    const actual = ["alice", "in", "wonderland"]
      .map((str) => str.length)
      .tap(capture)
      .filter((n) => n > 3);
    expect(actual).toEqual([5, 10]);
    expect(capture.last).toEqual([5, 2, 10]);
    unset("tap");
  });

  it("works with default init call", () => {
    initArrayTap();
    const actual = ["alice", "in", "wonderland"]
      .map((str) => str.length)
      .tap(capture)
      .filter((n) => n > 3);
    expect(actual).toEqual([5, 10]);
    expect(capture.last).toEqual([5, 2, 10]);
    unset("tap");
  });

  it("init accepts name argument", () => {
    const tap = Symbol("tap");
    initArrayTap(tap);
    const actual = ["alice", "in", "wonderland"]
      .map((str) => str.length)
      [tap](capture)
      .filter((n) => n > 3);
    expect(Array.prototype.tap).toBe(undefined);
    expect(actual).toEqual([5, 10]);
    expect(capture.last).toEqual([5, 2, 10]);
    unset(tap);
  });

  it("doesn't overwrite properties", () => {
    initArrayTap("map");
    const actual = ["alice", "in", "wonderland"]
      .map((str) => str.length)
      .filter((n) => n > 3);
    expect(Array.prototype.tap).toBe(undefined);
    expect(actual).toEqual([5, 10]);
  });
});
