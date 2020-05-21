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
  const result = team.collection.length;
  expect(result).toBe(n);
});

test('Если складывать объекты Person в массив, то итерируется только он своим собственным методом, потому что он массив', () => {
  const n = 2;
  const team = new Team();
  for (let index = 0; index < n; index += 1) {
    team.getPersons(new Person());
  }
  const result = [];
  for (const iterator of team.collection) {
    result.push(iterator);
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

test('Итератор класса Team не работает', () => {
  const n = 2;
  const team = new Team();
  for (let index = 0; index < n; index += 1) {
    team.getPersons(new Person());
  }
  const collection = [];
  let result = true;
  for (const iterator of team) {
    collection.push(iterator);
    result = false;
  }
  expect(result).toBeTruthy();
});
