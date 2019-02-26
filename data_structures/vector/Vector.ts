import Comparator from '../../utils/comparator/comparator';
import _ from 'lodash';

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
  private compare: Comparator
  /**
   * Creates an instance of Vector.
   * 使用传入的数组初始化一个Vector容器
   * @init {T[]} init
   * @memberof Vector
   */
  constructor(init: T[]) {
    this.eles = init
    this.compare = new Comparator()
  }

  // 增删改查vector

  /**
   * 查找并返回第一次出现ele的秩(index), 不存在则返回-1
   * 类比indexOf()
   * @param {T} ele
   * @returns {number}
   * @memberof Vector
   */
  indexOf(ele: T, startIndex?: number): number {
    let start = startIndex || 0
    const len = this.length()
    for (let i = start; i < len; i++) {
      const isEq = this.compare.equal(ele, this.eles[i])
      if (isEq) return i
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
    const len = this.length()
    for (let i = 0; i < len; i++) {
      if (cb(this.eles[i])) {
        return this.eles[i]
      }
    }
    return undefined
  }


  /**
   * 返回特定位置的值
   *
   * @param {number} index
   * @returns {T}
   * @memberof Vector
   */
  get(index: number): T {
    return this.eles[index]
  }

  /**
   * 修改特定位置的值，并返回修改后的vector
   *
   * @param {number} index
   * @param {T} value
   * @returns {Vector<T>}
   * @memberof Vector
   */
  put(index: number, value: T): Vector<T> {
    this.eles[index] = value
    return this
  }

  /**
   * 在指定index后插入一个值，返回插入后的vector
   *
   * @param {number} index
   * @param {T} value
   * @returns {Vector<T>}
   * @memberof Vector
   */
  insert(index: number, value: T): T[] {
    let prev = []
    let last = []
    const len = this.length()
    for (let i = 0; i < len; i++) {
      if (i <= index) {
        prev.push(this.eles[i])
      } else {
        last.push(this.eles[i])
      }
    }

    return [...prev, value, ...last]
  }

  /**
   * 返回删除后的Vector结构
   *
   * @param {T} value
   * @returns {T[]}
   * @memberof Vector
   */
  remove(value: T): T[] {
    // 此处以filter为实现原语，也可以更基本的for迭代原语来实现，
    // 问题是——使用这种方式和底层实现的区别在哪？filter/map也可看做vector层的操作原语，
    // 那要在vector上做更高级的操作直接使用下一层的原语构件不就行了么？

    return this.eles.filter(ele => {
      return ele !== value
    })
  }

  /**
   * 返回去重后的vector
   *
   * @returns {T[]}
   * @memberof Vector
   */
  uniq(): T[] {
    const len = this.eles.length
    let uniqList: T[] = []
    for (let i = 0; i < len; i++) {
      const ele = this.eles[i]
      if (!_.includes(uniqList, ele)) {
        uniqList.push(ele)
      }
    }
    return uniqList
  }

  /**
   * 判断vector是升序1、降序-1、还是无序0
   *
   * @returns {number}
   * @memberof Vector
   */
  disorder(): number {
    let n = 0
    let m = 0
    let len = this.eles.length

    for (let i = 1; i < len; i++) {
      if ((this.eles[i] as any) - (this.eles[i - 1] as any) >= 0) {
        n++
      }
      if ((this.eles[i] as any) - (this.eles[i - 1] as any) <= 0) {
        m++
      }
    }

    if (n == len - 1) {
      return 1
    } else if (m == len - 1) {
      return -1
    } else {
      return 0
    }
  }

  /**
   * 使用reduce方法实现map
   *
   * @returns {T[]}
   * @memberof Vector
   */
  map(fn: Function): T[] {
    return this.eles.reduce((prev, curr) => {
      return prev.concat(fn(curr))
    }, [])
  }

  // 信息获取方法
  length(): number {
    return this.eles.length;
  }
}