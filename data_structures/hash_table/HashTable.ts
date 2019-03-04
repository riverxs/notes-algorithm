import LinkedList from '../linked_list/LinkedList'

const defaultHashTableSize: number = 63

type K = string | number

interface LinkedListValue<K, V> {
  key: K,
  value: V
}

/**
 * 使用数组与链表实现HashTable，拉链法解决key冲突
 *
 * @export
 * @class HashTable
 */
export default class HashTable<V> {
  private buckets: LinkedList<LinkedListValue<K, V>>[]

  /**
   * Creates an instance of HashTable.
   * @param {number} [hashTableSize=defaultHashTableSize]
   * @memberof HashTable
   */
  constructor(hashTableSize: number = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())
  }


  /**
   * 哈希函数，将key转成一个哈希值
   * 此处使用一个简单办法
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
  set(key: K, value: V): void {
    const { node, bucketLinkedList } = this.getNode(key)
    if (!node) {
      // 插入新结点
      bucketLinkedList.append({ key, value })
    } else {
      // 更新结点
      node.value.value = value
    }
  }

  /**
   *
   *
   * @param {K} key
   * @returns {(V | null)}
   * @memberof HashTable
   */
  delete(key: K): V | null {
    const { node, bucketLinkedList } = this.getNode(key)
    if (node) {
      bucketLinkedList.delete(node.value)
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
    return false
  }

  /**
   * 以数组形式返回hashTable的所有key值
   *
   * @memberof HashTable
   */
  getKeys() {

  }
 }