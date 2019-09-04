import Comparator, { compareFn } from './../../../utils/comparator/comparator';

/**
 * @description 插值查找，本质在于对分割点的确认，计算线性比例（算是一种贪心算法）
 * @export
 * @param {number[]} array
 * @param {number} seekValue
 * @param {compareFn} [comparatorCallback]
 * @returns {number}
 */
export function interpolationSearch(array: number[], seekValue: number, comparatorCallback?: compareFn): number {
  // 初始检查
  if (seekValue < array[0] || seekValue > array[array.length -1]) return -1
  const comparator = new Comparator(comparatorCallback)
  /**
   * @description 此处虽是递归表达的，但计算还是迭代进行的（通过修改参数值）
   * @param {number} start
   * @param {number} end
   * @returns {number}
   */
  function innerIter(start: number, end: number): number {
    const rangeDelta = array[end] - array[start]
    const indexDelta = end - start
    const valueDelta = seekValue - array[start]

    const middle = start + Math.floor((valueDelta*indexDelta/rangeDelta))
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