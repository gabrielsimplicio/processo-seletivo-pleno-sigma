import {
  formatToString
} from './formatCurrency';

describe('formatToString', () => {

  test('Expect to be a empty string when undefined value', () => expect(formatToString()).toBe(''));

  test('Expect to be a empty string when 0', () => expect(formatToString(0)).toBe(''));

  test('', () => expect(formatToString(4.99)).toBe('R$ 4,99'));

});
