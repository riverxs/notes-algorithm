
/**
 * @description 阶乘
 * @export
 * @param {number} n
 * @returns {number}
 */
export default function factorial(n: number): number {
  return n > 1 ? n * factorial(n-1) : 1
}