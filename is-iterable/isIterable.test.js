import { isIterable } from './isIterable';

describe('isIterable', () => {
  test('should determine if the passed argument is an iterable or not', () => {
    expect(isIterable([1, 2, 3])).toBe(true);
    expect(isIterable('ABC')).toBe(true);
    expect(isIterable({ length: 1, 0: 'Alpha' })).toBe(false);
    expect(isIterable({ key: 'value' })).toBe(false);
    expect(isIterable(new Map())).toBe(true);
  });
});
