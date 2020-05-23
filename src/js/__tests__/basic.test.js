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

test('team итерируется, итератор отдаёт объекты класса Person', () => {
  const n = 2;
  const team = new Team();
  for (let index = 0; index < n; index += 1) {
    team.getPersons(new Person());
  }
  const result = [];
  for (const person of team) {
    if (team[person] !== undefined) {
      result.push(team[person]);
    }
  }
  expect(result).toEqual([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ]);
});
