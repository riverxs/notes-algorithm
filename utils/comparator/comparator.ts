import _ from 'lodash'
type comparableType = any
type compareResult = 0 | -1 | 1
// type compareFn = (a: comparableType, b: comparableType) => compareResult | Error
interface compareFn {
  (a: comparableType, b: comparableType) : compareResult | Error
}


/**
 * 比较工具集
 *
 * @class Comparator
 */
export default class Comparator {

  constructor(compareFn?: compareFn) {
    if (compareFn) {
      this.compare = compareFn
    }
  }
  /*
  默认比较函数实现
  */
  compare(a: comparableType, b: comparableType): compareResult | Error {
    if (_.eq(a, b)) return 0
    return _.gt(a, b) ? 1 : -1
  }

  equal(a: comparableType, b: comparableType) {
    return this.compare(a, b) === 0
  }

  lessThan(a: comparableType, b: comparableType) {
    return this.compare(a, b) < 0
  }

  lessThanOrEqual(a: comparableType, b: comparableType) {
    return this.lessThan(a, b) || this.equal(a,b)
  }

  greaterThan(a: comparableType, b: comparableType) {
    return this.compare(a, b) > 0
  }

  greaterThanOrEqual(a: comparableType, b: comparableType) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  reverse() {
    const originalCompareFn = this.compare
    this.compare = (a, b) => originalCompareFn(b, a)
  }
}



