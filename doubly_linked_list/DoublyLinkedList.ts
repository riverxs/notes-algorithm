import DoublyLinkedListNode from './DoublyLinkedListNode'
import Comparator from '../utils/comparator'

type comparableType = any
type compareResult = 0 | -1 | 1
interface compareFn {
  (a: comparableType, b: comparableType) : compareResult | Error
}

export default class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T> | null
  public tail: DoublyLinkedListNode<T> | null
  private compare: Comparator

  /**
   * Creates an initial instance of DoublyLinkedList.
   * @param {compareFn} [compareFn]
   * @memberof DoublyLinkedList
   */
  constructor(compareFn?: compareFn) {
    this.head = null
    this.tail = null
    this.compare = new Comparator(compareFn)
  }

  /**
   * 在双向链表前端插入节点
   *
   * @param {T} value
   * @returns
   * @memberof DoublyLinkedList
   */
  prepend(value: T) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    if (this.head) {
      this.head.previous = newNode
    }

    this.head = newNode

    // 尾节点不存在，则将加入的节点作为尾节点(同时也是头结点)
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }


}