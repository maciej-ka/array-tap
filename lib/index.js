const initArrayTap = (propName = "tap") => {
  const target = Array.prototype;

  if (Object.prototype.hasOwnProperty.call(target, propName)) {
    return;
  }

  Object.defineProperty(target, propName, {
    writable: true,
    value(fn) {
      fn(this);
      return this;
    },
  });
};

/**
 * Register Array.tap
 *
 * Because of popularity it seems its more important to support Typescript,
 * than to avoid potential naming collisions with initArrayTap(Symbol).
 *
 * Because of that initArrayTap will be undocumented and deprecated.
 */
initArrayTap();

module.exports = { initArrayTap };
