import {
  getPages,
  filterPages
 } from "./paginationMapping";

describe('getPages', () => {

  const expect74 = []
  for (let i = 0; i < 74; i++) {
    expect74.push(i + 1);
  }

  test('Expect to equal an array of int with 1..5', () =>
    expect(getPages(50, 10)).toEqual([1,2,3,4,5]));

  test('Expect to equal an array of int with 1..10', () =>
    expect(getPages(100, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]));

  test('Expect to equal an array of int with 1..74', () =>
    expect(getPages(1491, 20)).toEqual(expect74));

});

describe('filterPages', () => {

  const array = [];

  for (let i = 0; i < 50; i++) {
    array.push(i + 1);
  }

  test('Expect to have length of 9', () =>
    expect(filterPages(array, 10)).toHaveLength(9));

  test('Expect to equal right pages array when have 50 pages and current page is 1', () =>
    expect(filterPages(array, 1)).toEqual([1,2,3,4,5,6,7,8,9]));

  test('Expect to equal right pages array when have 50 pages and current page is 10', () =>
    expect(filterPages(array, 10)).toEqual([6,7,8,9,10,11,12,13,14]));

  test('Expect to equal right pages array when have 50 pages and current page is 25', () =>
    expect(filterPages(array, 25)).toEqual([21,22,23,24,25,26,27,28,29]));

  test('Expect to equal right pages array when have 50 pages and current page is 50', () =>
    expect(filterPages(array, 50)).toEqual([41,42,43,44,45,46,47,48,49,50]));

  test('Expect to equal right pages array when have 50 pages and current page is 50', () =>
    expect(filterPages([1,2,3,4,5,6,7], 5)).toEqual([1,2,3,4,5,6,7]));
});
