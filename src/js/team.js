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
    let current = 0;
    const last = this[Symbol.for('size')];
    return {
      next() {
        let result = null;
        if (current <= last) {
          result = {
            done: false,
            value: this[current += 1],
          };
        }
        result = {
          done: true,
        };
        return result;
      },
    };
  }
}
