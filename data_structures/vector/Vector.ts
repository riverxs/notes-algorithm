/**
 * vector abstract type
 * feature:
 * 1. 存储相同类型的值（如TS提供tuple, 用于已知元素数量和类型的数组，各元素的类型不必相同）
 * 2. 可变长的数组，可动态增删容器元素(JS的类型Array原生提供，在静态语言中数组是定长的)
 * 3. 在内存中彼此相邻地排列所有的值，线性存储
 * 实现Vector ADT 的操作，语义上就是原生实现JS类型Array的方法及一些其他相关操作
 * 实现上尽量使用语言提供的基本原语而不是利用现有的数组方法
 * 操作vector全部通过方法接口，而不提供简便形式
 * 全部实现均是纯函数，固定输入必定固定输出，不破坏原有结构，返回一个新的数据，如string类型
 *
 * 注：此ADT以学习为目的而写，不可用于生产环境
 * @export
 * @class Vector
 */
export default class Vector<T> {
  private eles: T[]

  /**
   * Creates an instance of Vector.
   * 使用传入的数组初始化一个Vector容器
   * @init {T[]} init
   * @memberof Vector
   */
  constructor(init: T[]) {
    this.eles = init
  }

  // 增删改查vector

  /**
   * 查找并返回第一次出现ele的秩(rank或index), 不存在则返回-1
   * 类比indexOf()
   * @param {T} ele
   * @returns {number}
   * @memberof Vector
   */
  indexOf(ele: T, startIndex?: number): number {
    let start = startIndex || 0
    const len = this.eles.length
    for (let i = start; i < len; i++) {
      // 此处只适用基本类型比较? 需引入
      if (ele === this.eles[i]) return i
    }
    return -1
  }

  /**
   * 用于找出第一个符合条件的数组成员。它的参数是一个回调函数，
   * 所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，
   * 然后返回该成员。如果没有符合条件的成员，则返回undefined
   *
   * @param {(ele: T) => boolean} cb
   * @returns {(T | undefined)}
   * @memberof Vector
   */
  find(cb: (ele: T) => boolean): T | undefined {
    return
  }

  get(rank: number): T {
    return
  }

  put(rank: number, value: T): T[] {
    return
  }

  insert(rank: number, value: T): T[] {
    return
  }

  remove(value) {

  }

  uniq() {

  }

  push() {

  }

  pop() {

  }

  shift() {

  }

  unshift() {

  }

  // 排序方法
  sort(fn?: (a: T, b: T) => number) {

  }

  reverse() {

  }

  disorder() {

  }

  // 迭代方法
  every() {

  }

  some() {

  }

  map() {

  }

  filter() {

  }

  forEach() {

  }

  // 归并方法
  reduce() {

  }

  reduceRight() {

  }

  // 格式化方法

  join(symbol: string): string {

  }

  toString() {

  }

  // 信息获取方法
  length(): number {
    return
  }

  includes() {

  }
}