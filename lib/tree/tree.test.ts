import * as trees from './generate';
import { visitTree, EVisitType } from './visit';
import { deep } from './deep';
import { same } from './same';
import { mirror } from './mirror';

test('Trees generated correctly', () => {
  function testOrder(type: EVisitType): number[] {
    const result: number[] = [];

    function handler(value: number) {
      result.push(value);
    }

    visitTree(trees.treeA, type, handler);

    return result;
  }

  expect(testOrder(EVisitType.Pre)).toEqual([4, 2, 1, 3, 7, 6, 9]);
  expect(testOrder(EVisitType.In)).toEqual([1, 2, 3, 4, 6, 7, 9]);
  expect(testOrder(EVisitType.Post)).toEqual([1, 3, 2, 6, 9, 7, 4]);
});

test('Deep function returns correctly', () => {
  expect(deep(trees.treeA)).toBe(3);
});

test('Same function works correctly', () => {
  expect(same(trees.treeA, trees.treeA)).toBeTruthy();
});

test('Mirror function works correctly', () => {
  expect(same(trees._treeA, mirror(trees.treeA))).toBeTruthy();
});
