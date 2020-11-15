import { getFibonacciNumber } from './getFibonacciNumber.lib';

describe('getFibonacciNumber', () => {
  it('returns the right value', () => {
    expect(getFibonacciNumber(0)).toEqual(1);
    expect(getFibonacciNumber(1)).toEqual(1);
    expect(getFibonacciNumber(2)).toEqual(2);
    expect(getFibonacciNumber(3)).toEqual(3);
    expect(getFibonacciNumber(4)).toEqual(5);
    expect(getFibonacciNumber(5)).toEqual(8);
  });
});
