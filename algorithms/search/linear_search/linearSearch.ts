import Comparator, { compareFn } from "../../../utils/comparator/comparator";

/**
 * @description 线性查找符合条件的值（返回符合条件的值对应的index列表）O(n)
 * @export
 * @template V
 * @param {V[]} array
 * @param {V} seekValue
 * @param {compareFn} [comparatorCallback]
 * @returns {number[]}
 */
export default function linearSearch<V>(array: V[], seekValue: V, comparatorCallback?: compareFn): number[] {
  const comparator = new Comparator(comparatorCallback)
  const foundIndices: number[] = []

  array.forEach((item, index) => {
    if (comparator.equal(item, seekValue)) {
      foundIndices.push(index)
    }
  })

  return foundIndices
}