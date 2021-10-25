import { Observer } from "./Observer.interface";
import { TestObservable } from "./TestObservable";

export class TestObserver implements Observer {

  updatesFromObservable: number[] = [];

  update(context: TestObservable): void {
    this.updatesFromObservable.push(context.internalState)
  }
}
