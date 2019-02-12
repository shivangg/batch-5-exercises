import path from 'path';
import { csvToJson } from './csvToJson';

const csvFile = path.resolve('avengers.csv');

const fixture = [{
  name: 'Steve Rogers',
  superheroname: 'Captain America',
  power: 'Superhuman strength and combat skill',
}, {
  name: 'Tony Stark',
  superheroname: 'Ironman',
  power: 'Brains and money',
}, {
  name: 'Bruce Banner',
  superheroname: 'Hulk',
  power: 'Monster within',
}, {
  name: 'Peter Parker',
  superheroname: 'Spiderman',
  power: 'Spidey sense',
}];

describe('csvToJson', () => {
  test('should convert csv to json', async () => {
    const actual = await csvToJson(csvFile);
    expect(actual).toEqual(fixture);
  });
});
