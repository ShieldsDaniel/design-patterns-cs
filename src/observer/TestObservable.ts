import { Observable } from "./Observable.interface";
import { Observer } from "./Observer.interface";

export class TestObservable implements Observable {

  private observers: Observer[] = [];
  internalState: number = 0;

  subscribe(observer: Observer): void {
    this.unsubscribe(observer);
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifySubscribers(): void {
    this.observers.forEach(obs => obs.update(this))
  }
}