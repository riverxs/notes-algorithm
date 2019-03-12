import LinkedList from '../linked_list/LinkedList'

// 最好是素数，这样充分利用原散列值的所有位，减少碰撞
const defaultHashTableSize: number = 31

type K = string | number

interface LinkedListValue<K, V> {
  key: K,
  value: V
}

/**
 * 使用数组与链表实现HashTable(不在此实现中使用内置对象字面量和Map结构)，拉链法解决key冲突，插入, 查找，删除平均时间复杂度O(1)
 * so, they are widely used in many kinds of computer software,
 * particularly for associative arrays, database indexing, caches, and sets.
 * @export
 * @class HashTable
 */
export default class HashTable<V> {
  readonly buckets: LinkedList<LinkedListValue<K, V>>[]
  private entries: Array<[K, V]>
  /**
   * Creates an instance of HashTable.
   * @param {number} [hashTableSize=defaultHashTableSize]
   * @memberof HashTable
   */
  constructor(hashTableSize: number = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())
    this.entries = []
  }

  /**
   * 哈希函数，将key转成一个哈希值
   * 此处使用一个简单办法，性能没做优化，可考虑缓存
   * @param {K} key
   * @returns {number}
   * @memberof HashTable
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
   * @memberof HashTable
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
   * @memberof HashTable
   */
  set(key: K, value: V): HashTable<V> {
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
   * @memberof HashTable
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
   * @memberof HashTable
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
   * @memberof HashTable
   */
  has(key: K): boolean {
    return this.entries.some((entry) => {
      return entry[0] === key
    })
  }

  /**
   * 以数组形式返回hashTable的所有key值
   *
   * @memberof HashTable
   */
  getKeys() {
    return this.entries.map( entry => {
      return entry[0]
    })
  }

  /**
   * 以[[key, value],]形式返回hashTable的键值对
   *
   * @returns
   * @memberof HashTable
   */
  getEntries() {
    return this.entries
  }

  /**
   * 以数组形式返回HashTable的值
   *
   * @returns
   * @memberof HashTable
   */
  getValues() {
    return this.entries.map( entry => {
      return entry[1]
    })
  }

  /**
   * 判断hashTable是否为空
   *
   * @returns {boolean}
   * @memberof HashTable
   */
  isEmpty(): boolean {
    return this.entries.length === 0
  }

  /**
   * 查看hashTable的键个数
   *
   * @returns {number}
   * @memberof HashTable
   */
  size(): number {
    return this.entries.length
  }
 }