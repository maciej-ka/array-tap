const { initTap } = require("./index");

// utility for testing
const capture = val => (capture.last = val);

// clean changes
const unset = name =>
  Object.defineProperty(Array.prototype, name, {
    writable: true,
    value: undefined
  });

describe("tap", () => {
  it("extends array proto by default", () => {
    initTap();
    const actual = ["alice", "in", "wonderland"]
      .map(str => str.length)
      .tap(capture)
      .filter(n => n > 3);
    expect(actual).toEqual([5, 10]);
    expect(capture.last).toEqual([5, 2, 10]);
    unset("tap");
  });

  it("accepts name argument", () => {
    const tap = Symbol("tap");
    initTap(tap);
    const actual = ["alice", "in", "wonderland"]
      .map(str => str.length)
      [tap](capture)
      .filter(n => n > 3);
    expect(Array.prototype.tap).toBe(undefined);
    expect(actual).toEqual([5, 10]);
    expect(capture.last).toEqual([5, 2, 10]);
    unset(tap);
  });

  it("doesn't overwrite properties", () => {
    initTap("map");
    const actual = ["alice", "in", "wonderland"]
      .map(str => str.length)
      .filter(n => n > 3);
    expect(Array.prototype.tap).toBe(undefined);
    expect(actual).toEqual([5, 10]);
  });
});
