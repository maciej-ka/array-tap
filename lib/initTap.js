const initTap = (name = "tap") => {
  const target = Array.prototype;

  if (Object.prototype.hasOwnProperty.call(target, name)) {
    return;
  }

  Object.defineProperty(target, name, {
    writable: true,
    value(fn) {
      fn(this);
      return this;
    }
  });
};

module.exports = initTap;
