import { createUrl } from './marvelUrl';

test('Should concatenate an url', () => {

  expect(createUrl('test', 'test.com', 'api=key')).toEqual('test.com/test?api=key');

});
