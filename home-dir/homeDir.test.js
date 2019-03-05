import { homeDir } from './homeDir';

describe('Check if home dir', () => {
  test('is correct', () => {
    expect(homeDir()).toBe('/home/shivangg');
  });
});
