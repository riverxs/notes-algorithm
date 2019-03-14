import LinkedList from '../linked_list/LinkedList'
import Comparator from '../../utils/comparator/comparator'

// 最好是素数，这样充分利用原散列值的所有位，减少碰撞
const defaultSequentialSignTableSize: number = 31

type K = string | number

interface LinkedListValue<K, V> {
  key: K,
  value: V
}

/**
 * 有序符号表的实现，使用hashTable一样的实现
 * 使用数组与链表实现sequentialSignTableSize(不在此实现中使用内置对象字面量和Map结构)，
 * 拉链法解决key冲突，插入, 查找，删除平均时间复杂度O(1)
 *
 * @export
 * @class sequentialSignTableSize
 */
export default class SequentialSignTable<V> {
  readonly buckets: LinkedList<LinkedListValue<K, V>>[]
  private entries: Array<[K, V]>
  private compare: Comparator
  /**
   * Creates an instance of sequentialSignTableSize.
   * @param {number} [sequentialSignTableSize=defaultSequentialSignTableSize]
   * @memberof SequentialSignTable
   */
  constructor(sequentialSignTableSize: number = defaultSequentialSignTableSize) {
    this.buckets = Array(sequentialSignTableSize).fill(null).map(() => new LinkedList())
    this.entries = []
    this.compare = new Comparator()
  }

  /**
   * 哈希函数，将key转成一个哈希值
   * 此处使用一个简单办法，性能没做优化，可考虑缓存
   * @param {K} key
   * @returns {number}
   * @memberof SequentialSignTable
   */
  private hash(key: K): number {
    const hash = Array.from(key.toString()).reduce(
      (hashAccumulater: number, keyChar: string) => (hashAccumulater + keyChar.charCodeAt(0)),
      0
    )
    return hash % this.buckets.length
  }

  /**
   * 获取key在链表上对应的node
   *
   * @private
   * @param {K} key
   * @returns
   * @memberof SequentialSignTable
   */
  private getNode(key: K) {
    const hash = this.hash(key)
    const bucketLinkedList = this.buckets[hash]
    const node = bucketLinkedList.find((nodeValue) => nodeValue.key === key)

    return { node, bucketLinkedList }
  }

  /**
   * 设置值
   *
   * @param {K} key
   * @param {V} value
   * @memberof SequentialSignTable
   */
  set(key: K, value: V): SequentialSignTable<V> {
    const { node, bucketLinkedList } = this.getNode(key)
    if (!node) {
      // 插入新结点
      bucketLinkedList.append({ key, value })
      this.entries.push([key, value])
    } else {
      // 更新结点
      node.value.value = value
      this.entries = this.entries.map((entry) => {
        if (entry[0] === key) {
          entry[1] = value
          return entry
        } else {
          return entry
        }
      })
    }
    return this
  }

  /**
   * 删除特定键值对
   *
   * @param {K} key
   * @returns {(V | null)}
   * @memberof SequentialSignTable
   */
  delete(key: K): V | null {
    const { node, bucketLinkedList } = this.getNode(key)
    if (node) {
      bucketLinkedList.delete(node.value)
      // 删除entries中的值
      this.entries = this.entries.filter( entry => {
        if (entry[0] === key) {
          return false
        } else {
          return true
        }
      })
    }
    return null
  }

  /**
   * 获取key对应value，取值操作
   *
   * @param {K} key
   * @returns {V}
   * @memberof SequentialSignTable
   */
  get(key: K): V | null {
    const { node } = this.getNode(key)
    if (node) {
      return node.value.value
    }
    return null
  }

  /**
   * 是否存在指定key
   *
   * @param {K} key
   * @returns {boolean}
   * @memberof SequentialSignTable
   */
  has(key: K): boolean {
    return this.entries.some((entry) => {
      return entry[0] === key
    })
  }

  /**
   * 返回最小键
   *
   * @returns {K}
   * @memberof SequentialSignTable
   */
  min(): K {
    const keys = this.getKeys()
    return keys[0]
  }

  /**
   * 返回最大键值
   *
   * @returns {K}
   * @memberof SequentialSignTable
   */
  max(): K {
    const keys = this.getKeys()
    return keys[keys.length -1]
  }

  /**
   * 返回key在[low, high]之间所有的键，已排序
   *
   * @param {K} low
   * @param {K} high
   * @returns {K[]}
   * @memberof SequentialSignTable
   */
  keys(low: K, high: K): K[] {
    return this.entries.map( entry => entry[0]).filter(entry => {
      return this.compare.greaterThan(entry, low) && this.compare.lessThan(entry, high)
    }).sort((a, b) => {
      if (this.compare.greaterThan(a, b)) {
        return -1
      } else if (this.compare.equal(a, b)) {
        return 0
      } else {
        return 1
      }
    })
  }

  /**
   * 以数组形式返回SequentialSignTable的所有key值
   *
   * @memberof SequentialSignTable
   */
  private getKeys(): K[] {
    const len = this.entries.length
    return this.entries.map(entry => entry[0]).sort((a, b) => {
      if (this.compare.greaterThan(a, b)) {
        return -1
      } else if (this.compare.equal(a, b)) {
        return 0
      } else {
        return 1
      }
    })
  }

  /**
   * 以[[key, value],]形式返回SequentialSignTable的键值对
   *
   * @returns
   * @memberof SequentialSignTable
   */
  getEntries(): [K, V][] {
    return this.entries
  }

  /**
   * 以数组形式返回SequentialSignTable的值
   *
   * @returns
   * @memberof SequentialSignTable
   */
  getValues(): V[] {
    return this.entries.map( entry => {
      return entry[1]
    })
  }

  /**
   * 判断sequentialSignTableSize是否为空
   *
   * @returns {boolean}
   * @memberof SequentialSignTable
   */
  isEmpty(): boolean {
    return this.entries.length === 0
  }

  /**
   * 查找小于等于K的最大键
   *
   * @param {K} key
   * @returns {K}
   * @memberof SequentialSignTable
   */
  floor(key: K): K {
    const index = this.getKeys().indexOf(key)
    return
  }

  /**
   * 查找大于等于K的最小键
   *
   * @param {K} key
   * @returns {K}
   * @memberof SequentialSignTable
   */
  ceiling(key: K): K {

  }

  /**
   * 小于key的键的数量
   *
   * @param {K} key
   * @returns {number}
   * @memberof SequentialSignTable
   */
  rank(key: K): number {
    return 0
  }

  /**
   * 排名为rank的键
   *
   * @param {number} rank
   * @returns {K}
   * @memberof SequentialSignTable
   */
  select(rank: number): K {

  }

  /**
   * 删除最小键
   *
   * @returns
   * @memberof SequentialSignTable
   */
  deleteMin() {
    return this.delete(this.min())
  }

  /**
   * 删除最大键
   *
   * @returns
   * @memberof SequentialSignTable
   */
  deleteMax() {
    return this.delete(this.max())
  }

  /**
   * 查看再[low, high]之间键的多少
   *
   * @param {K} low
   * @param {K} high
   * @returns {number}
   * @memberof SequentialSignTable
   */
  size(low?: K, high?: K): number {
    if (!low && !high) return this.entries.length
    else {
      return this.keys(<K>low, <K>high).length
    }
  }
 }