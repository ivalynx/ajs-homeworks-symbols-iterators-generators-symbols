import Team from '../Team';
import Person from '../Person';

test('В team нельзя добавить объект, который не принадлежит к классу Person', () => {
  function result() {
    const team = new Team();
    team.getPersons({});
  }
  expect(result).toThrow('Добавить можно только объект класса Person');
});

test('В team можно добавить n объектов Person', () => {
  const n = 5;
  const team = new Team();
  for (let index = 0; index < n; index += 1) {
    team.getPersons(new Person());
  }
  const result = team[Symbol.for('size')];
  expect(result).toBe(n);
});

test('team не итерируется', () => {
  const n = 2;
  const team = new Team();
  for (let index = 0; index < n; index += 1) {
    team.getPersons(new Person());
  }
  let result = false;
  for (const iterator of team) {
    console.log(iterator);
    result = true;
  }
  expect(result).toBeFalsy();
});

test('зато iterator.next() отдаёт done: true', () => {
  const n = 2;
  const team = new Team();
  for (let index = 0; index < n; index += 1) {
    team.getPersons(new Person());
  }
  let result = null;
  const iterator = team[Symbol.iterator]();
  const answer = iterator.next();
  result = answer.done;
  expect(result).toBeTruthy();
});
