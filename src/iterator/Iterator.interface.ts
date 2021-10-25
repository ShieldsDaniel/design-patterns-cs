export interface Iterator<T> {
  next: () => { value: T, done: false} | { value: void, done: true };
}
