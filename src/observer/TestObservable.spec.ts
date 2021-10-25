import { TestObservable } from "./TestObservable";
import { TestObserver } from "./TestObserver";

const wait = (x: number): Promise<void> => new Promise((res) => {
  setTimeout(res, x);
});

describe("The TestObservable and TestObserver classes", () => {
  it("Should allow the TestObservable to asynchronously update the TestObservers", async () => {
    expect.assertions(2);
    const testObservable = new TestObservable();
    testObservable.internalState = 1;
    testObservable.notifySubscribers();
    const testObserver1 = new TestObserver();
    const testObserver2 = new TestObserver();
    testObservable.subscribe(testObserver1);
    testObservable.internalState = 2;
    testObservable.notifySubscribers();
    testObservable.subscribe(testObserver2);
    testObservable.internalState = 3;
    await wait(100);
    testObservable.notifySubscribers();
    testObservable.unsubscribe(testObserver1);
    await wait(100);
    testObservable.internalState = 4;
    testObservable.notifySubscribers();
    await wait(100);
    expect(testObserver1.updatesFromObservable).toEqual([2, 3]);
    expect(testObserver2.updatesFromObservable).toEqual([3, 4]);
    return Promise.resolve(0);
  });
});