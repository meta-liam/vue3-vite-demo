import { sumTS } from '../sum';

describe('test Sum function', () => {
  it('TS:test Sum function', () => {
    //const sum = require('../sum');
    expect(sumTS(2, 3)).toEqual(5);
  });
});