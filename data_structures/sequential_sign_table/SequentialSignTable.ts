import LinkedList from '../linked_list/LinkedList'
import Comparator from '../../utils/comparator/comparator'

// 最好是素数，这样充分利用原散列值的所有位，减少碰撞
const defaultSequentialSignTableSize: number = 31

type K = any

interface LinkedListValue<K, V> {
  key: K,
  value: V
}

/**
 * 使用数组与链表实现sequentialSignTableSize(不在此实现中使用内置对象字面量和Map结构)，拉链法解决key冲突，插入, 查找，删除平均时间复杂度O(1)
 * so, they are widely used in many kinds of computer software,
 * particularly for associative arrays, database indexing, caches, and sets.
 * @export
 * @class sequentialSignTableSize
 */
export default class SequentialSignTable<V> {
  readonly buckets: LinkedList<LinkedListValue<K, V>>[]
  private entries: Array<[K, V]>
  private compare: Comparator
  /**
   * Creates an instance of sequentialSignTableSize.
   * @param {number} [sequentialSignTableSizeSize=defaultSequentialSignTableSize]
   * @memberof sequentialSignTableSize
   */
  constructor(sequentialSignTableSizeSize: number = defaultSequentialSignTableSize) {
    this.buckets = Array(sequentialSignTableSizeSize).fill(null).map(() => new LinkedList())
    this.entries = []
    this.compare = new Comparator()
  }

  /**
   * 哈希函数，将key转成一个哈希值
   * 此处使用一个简单办法，性能没做优化，可考虑缓存
   * @param {K} key
   * @returns {number}
   * @memberof sequentialSignTableSize
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
   * @memberof sequentialSignTableSize
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
   * @memberof sequentialSignTableSize
   */
  set(key: K, value: V): sequentialSignTableSize<V> {
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
   * @memberof sequentialSignTableSize
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
   * @memberof sequentialSignTableSize
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
   * @memberof sequentialSignTableSize
   */
  has(key: K): boolean {
    return this.entries.some((entry) => {
      return entry[0] === key
    })
  }

  /**
   * 以数组形式返回sequentialSignTableSize的所有key值
   *
   * @memberof sequentialSignTableSize
   */
  getKeys(): K[] {
    return this.entries.map( entry => {
      return entry[0]
    })
  }

  /**
   * 以[[key, value],]形式返回sequentialSignTableSize的键值对
   *
   * @returns
   * @memberof sequentialSignTableSize
   */
  getEntries(): [K, V][] {
    return this.entries
  }

  /**
   * 以数组形式返回sequentialSignTableSize的值
   *
   * @returns
   * @memberof sequentialSignTableSize
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
   * @memberof sequentialSignTableSize
   */
  isEmpty(): boolean {
    return this.entries.length === 0
  }

  /**
   * 查看sequentialSignTableSize的键个数
   *
   * @returns {number}
   * @memberof sequentialSignTableSize
   */
  size(): number {
    return this.entries.length
  }

  /**
   * 返回最小键
   *
   * @returns {K}
   * @memberof SequentialSignTable
   */
  min(): K {

  }

  /**
   * 返回最大键值
   *
   * @returns {K}
   * @memberof SequentialSignTable
   */
  max(): K {

  }

  /**
   *
   *
   * @param {K} key
   * @returns {K}
   * @memberof SequentialSignTable
   */
  floor(key: K): K {

  }

  /**
   *
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

  deleteMin() {

  }

  deleteMax() {

  }

  /**
   *
   *
   * @param {K} low
   * @param {K} high
   * @returns {number}
   * @memberof SequentialSignTable
   */
  size(low: K, high: K): number {
    return 0
  }

  keys(low: K, high: K): K[] {
    return []
  }
 }