import Person from './Person';

export default class Team {
  constructor() {
    this[Symbol.for('size')] = 0;
  }

  getPersons(object) {
    if (object instanceof Person) {
      this[this[Symbol.for('size')]] = object;
      this[Symbol.for('size')] += 1;
    } else {
      throw (new Error('Добавить можно только объект класса Person'));
    }
  }

  [Symbol.iterator]() {
    return {
      current: 0,
      last: this[Symbol.for('size')],
      next() {
        if (this.current <= this.last) {
          const curr = this.current;
          this.current += 1;
          return { done: false, value: curr };
        }
        return { done: true };
      },
    };
  }
}
