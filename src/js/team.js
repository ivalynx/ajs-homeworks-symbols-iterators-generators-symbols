export default class Team {
  [Symbol.iterator]() {
    let current = 0;
    const last = this.team.length;
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
