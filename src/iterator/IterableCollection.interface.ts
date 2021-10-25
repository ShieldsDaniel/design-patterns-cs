import { Iterator } from "./Iterator.interface";

export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}
