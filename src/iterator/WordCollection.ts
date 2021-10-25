import { IterableCollection } from "./IterableCollection.interface";
import { Iterator } from "./Iterator.interface";

class RegularWordIterator implements Iterator<string> {

  private position = 0;

  constructor(private word: WordCollection) {}

  next() {
    if (this.position > this.word.word.length - 1) {
      return {
        value: undefined,
        done: true as const,
      };
    } else {
      const val = this.word.word.charAt(this.position);
      this.position += 1;
      return {
        value: val,
        done: false as const,
      };
    }
  }
}

class ReverseWordIterator implements Iterator<string> {

  private position = 0;

  constructor(private word: WordCollection) {
    this.position = word.word.length - 1;
  }

  next() {
    if (this.position < 0) {
      return {
        value: undefined,
        done: true as const,
      };
    } else {
      const val = this.word.word.charAt(this.position);
      this.position -= 1;
      return {
        value: val,
        done: false as const,
      };
    }
  }
}

class SkipLetterIterator implements Iterator<string> {

  private position = 0;

  constructor(private word: WordCollection, private lettersToSkip: number) {}

  next() {
    if (this.position > this.word.word.length - 1) {
      return {
        value: undefined,
        done: true as const,
      };
    } else {
      const val = this.word.word.charAt(this.position);
      this.position += this.lettersToSkip;
      return {
        value: val,
        done: false as const,
      };
    }
  }
}

export class WordCollection implements IterableCollection<string> {

  readonly _word: string;
  
  constructor(word: string) {
    this._word = word;
  }

  get word(): string {
    return this._word;
  }

  createIterator(): Iterator<string> {
    return new RegularWordIterator(this);
  }

  createReverseIterator(): Iterator<string> {
    return new ReverseWordIterator(this);
  }

  createSkipLetterIterator(lettersToSkip: number): Iterator<string> {
    return new SkipLetterIterator(this, lettersToSkip);
  }
}
