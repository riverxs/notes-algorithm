import Comparator, { compareFn } from '../../../utils/comparator/comparator';

/**
 * @description 二分查找迭代表达版本（循环实现）O(logn)
 * @export
 * @param {V[]} array
 * @param {*} seekValue
 * @param {compareFn} comparatorCallback
 * @returns {number}
 */
export default function binarySearch<V>(array: V[], seekValue: V, comparatorCallback?: compareFn): number {
  const comparator = new Comparator(comparatorCallback)

  let startIndex = 0
  let endIndex = array.length - 1

  while(startIndex <= endIndex) {
    const midIndex = startIndex + Math.floor((endIndex - startIndex)/2)

    if (comparator.equal(array[midIndex], seekValue)) return midIndex
    if (comparator.lessThan(array[midIndex], seekValue)) {
      startIndex = midIndex + 1
    } else {
      endIndex = midIndex - 1
    }
  }
  return -1
}


/**
 * @description  递归版本 O(logn)
 * @export
 * @template V
 * @param {V[]} array
 * @param {V} seekValue
 * @param {compareFn} comparatorCallback
 * @returns {number}
 */
export function binarySearchRecursion<V>(array: V[], seekValue: V, comparatorCallback?: compareFn): number {
  const comparator = new Comparator(comparatorCallback)

  /**
   * @description 此处虽是递归表达的，但计算还是迭代进行的（通过修改参数值）
   * @param {number} start
   * @param {number} end
   * @returns {number}
   */
  function innerIter(start: number, end: number): number {
    const middle = start + Math.floor((end - start)/2)
    if (start > end) return -1
    if (comparator.equal(array[middle], seekValue)) {
      return middle
    }
    if (comparator.lessThan(array[middle], seekValue)) {
      return innerIter(middle + 1, end)
    } else {
      return innerIter(start, middle - 1)
    }
  }

  return innerIter(0, array.length - 1)
}