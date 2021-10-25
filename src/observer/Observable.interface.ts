import { Observer } from "./Observer.interface";

export interface Observable {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
  notifySubscribers: () => void;
}
