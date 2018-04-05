import { createUrl } from './marvelUrl';

test('Should concatenate an url', () => {

  expect(createUrl('test', 'test.com', 'api=key')).toEqual('test.com/test?api=key');

});

test('Should concatenate an url with params', () => {

  expect(createUrl('test', 'test.com', 'api=key', { page: '1', take: 20 }))
    .toEqual('test.com/test?api=key&page=1&take=20');

});
