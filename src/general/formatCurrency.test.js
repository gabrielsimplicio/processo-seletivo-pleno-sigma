import {
  formatToString
} from './formatCurrency';

describe('formatToString', () => {

  test('Expect to be a empty string when undefined value', () => expect(formatToString()).toBe(''));

  test('Expect to be a empty string when 0', () => expect(formatToString(0)).toBe(''));

  test('Expect to be the formatted value when integer number', () => expect(formatToString(4)).toBe('R$ 4,00'));

  test('Expect to be the formatted value ', () => expect(formatToString(4.99)).toBe('R$ 4,99'));

  test('Expect to be the formatted value with 0 in final', () => expect(formatToString(4.9)).toBe('R$ 4,90'));

});
