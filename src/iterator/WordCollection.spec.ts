import { WordCollection } from "./WordCollection";

describe("The WordCollection class", () => {
  describe("The createIterator method", () => {
    it("Should iterate over the provided string letter by letter", () => {
      const testWord = "Krankenversicherungskartenleser";
      const collection = new WordCollection(testWord);
      const collectionIterator = collection.createIterator();
      let testIndex = 0;
      let letter = null;
      letter = collectionIterator.next();
      while (!letter.done) {
        expect(letter.value).toEqual(testWord.charAt(testIndex));
        expect(letter.done).toBe(false);
        testIndex += 1;
        letter = collectionIterator.next();
      }
      expect(collectionIterator.next().done).toBe(true);
    });
  });
  describe("The createReverseIterator method", () => {
    it("Should iterate over the provided string in reverse", () => {
      const testWord = "Krankenversicherungskartenleser";
      const collection = new WordCollection(testWord);
      const collectionIterator = collection.createReverseIterator();
      let testIndex = testWord.length - 1;
      let letter = null;
      letter = collectionIterator.next();
      while (!letter.done) {
        expect(letter.value).toEqual(testWord.charAt(testIndex));
        expect(letter.done).toBe(false);
        testIndex -= 1;
        letter = collectionIterator.next();
      }
      expect(collectionIterator.next().done).toBe(true);
    });
  });
  describe("The createSkipLetterIterator method", () => {
    it("Should iterate over the provided string skipping the provided number of letters each iterations", () => {
      const testWord = "Krankenversicherungskartenleser";
      const skip = 2;
      const collection = new WordCollection(testWord);
      const collectionIterator = collection.createSkipLetterIterator(skip);
      let testIndex = 0;
      let letter = null;
      letter = collectionIterator.next();
      while (!letter.done) {
        expect(letter.value).toEqual(testWord.charAt(testIndex));
        expect(letter.done).toBe(false);
        testIndex += skip;
        letter = collectionIterator.next();
      }
      expect(collectionIterator.next().done).toBe(true);
    });
  });
});