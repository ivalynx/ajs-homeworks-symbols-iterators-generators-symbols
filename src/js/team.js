import Person from './Person';

export default class Team {
  constructor() {
    this.collection = [];
  }

  getPersons(object) {
    if (object instanceof Person) {
      this.collection.push(object);
    } else {
      throw (new Error('Добавить можно только объект класса Person'));
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.collection.length;
    return {
      next() {
        let result = null;
        if (current <= last) {
          result = {
            done: false,
            value: current += 1,
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
