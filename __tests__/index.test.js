import reverse from '../src/index.js';
import _ from 'lodash';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
  expect(reverse('world')).toEqual('dlrow');
});

const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false]; 

test('includes', () => {
  expect(_.includes(coll, 3)).toBe(true);
  expect(_.includes(coll, 11)).toBe(false);
});