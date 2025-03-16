import {expect, test} from 'vitest';

import { cumSum } from './alg_cumulativeSum';
test('MattO - cumulative sum of an array', () => {
    expect(cumSum([1,2,4,8,32])).toBe(47);
    expect(cumSum([-2,-4,-8])).toBe(-14);

});

import { LRU } from './alg_LRUCache';
test('MattO - LRU cache', () => {
  const cache = new LRU(2);
  cache.putItem(1, 1);
  cache.putItem(2, 2);
  expect(cache.getItem(1)).toBe(1);
  cache.putItem(3, 3);
  expect(cache.getItem(2)).toBe(undefined);
});


import { search } from './alg_binarySearch';
test('MattO - binary search', () => {
  expect(search([1, 3, 5, 7], 3)).toBe(1);
  expect(search([1, 3, 5, 7], 5)).toBe(2);
  expect(search([1, 3, 5, 7], 2)).toBe(-1);
} );
