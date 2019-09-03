import Comparator, { compareFn } from '../../../utils/comparator/comparator';

/**
 * @description 跳跃搜索排好序的数组，先跳跃搜索到指定区间，然后在指定区间线性搜索具体值
 * @export
 * @template V
 * @param {V[]} sortedArray
 * @param {V} seekValue
 * @param {compareFn} [comparatorCallback]
 * @returns {number}
 */
export default function jumpSearch<V>(sortedArray: V[], seekValue: V, comparatorCallback?: compareFn): number {
  const comparator = new Comparator(comparatorCallback)
  const len = sortedArray.length
  // 空数组无法查找
  if (!len) return -1
  // 跳跃查找
  const jumpSize = Math.floor(Math.sqrt(len))
  let blockStart = 0
  let blockEnd = jumpSize
  while(comparator.greaterThan(seekValue, sortedArray[Math.min(blockEnd, len) - 1])) {
    blockStart = blockEnd
    blockEnd += jumpSize
    // 越界没找到则退出
    if (blockStart > len) return -1
  }
  // 在指定区间线性查找
  let currentIndex = blockStart
  while (currentIndex < Math.min(blockEnd, len)) {
    if (comparator.equal(sortedArray[currentIndex], seekValue)) return currentIndex
    currentIndex += 1
  }
  return -1
}
