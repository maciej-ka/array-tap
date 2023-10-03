interface Array {
  tap(callback: (array: this) => void): this;
}

declare module 'array-tap' {
  export function initArrayTap(propName?: string): void;
}
