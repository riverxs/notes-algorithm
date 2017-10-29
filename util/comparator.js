/**
 * 数值比较工具集
 * 
 * @class Comparator
 */
class Comparator {

  /**
   * Creates an instance of Comparator.
   * @param {function} compareFn 
   * @memberof Comparator
   */
  constructor(compareFn) {
    if (compareFn) {
      this.compare = compareFn
    }
  }
  /* 
  默认比较函数实现  
  */
  compare(a, b) {
    if (a===b) return 0
    return a < b ? -1 : 1
  }

  equal(a,b) {
    return this.compare(a, b) === 0
  }

  lessThan(a, b) {
    return this.compare(a, b) < 0
  }

  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a,b)
  }

  greaterThan(a, b) {
    return this.compare(a, b) > 0
  }

  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  reverse() {
    const originalCompareFn = this.compare
    this.compare = (a, b) => originalCompareFn(b, a)
  }
}

module.exports = Comparator;


