
/**
 * @description 生成一个斐波那契数列
 * @export
 * @param {number} n
 * @returns {number[]}
 */
export default function fibonacci(n: number): number[] {
  const fibSequence = [1]
  let currValue = 1
  let prevValue = 0

  if (n === 1) return fibSequence
  let iterCounter = n - 1
  while (iterCounter) {
    currValue += prevValue
    prevValue = currValue - prevValue
    fibSequence.push(currValue)
    iterCounter -= 1
  }
  return fibSequence
}


/**
 * @description 生成斐波那契数
 * @export
 * @param {number} n
 * @returns {number}
 */
export function genFibonacci(n: number): number {
  if (n===1 || n===2) return 1
  return genFibonacci(n-1) + genFibonacci(n-2)
}
