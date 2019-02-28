import DoublyLinkedListNode  from './DoublyLinkedListNode'
import Comparator from '../../utils/comparator/comparator'

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
   * @returns DoublyLinkedList instance
   * @memberof DoublyLinkedList
   */
  prepend(value: T): DoublyLinkedList<T> {
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

  /**
   * 在双向链表的后端插入节点
   *
   * @param {T} value
   * @returns DoublyLinkedList instance
   * @memberof DoublyLinkedList
   */
  append(value: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    (this.tail as DoublyLinkedListNode<T>).next = newNode
    newNode.previous = this.tail
    // 设置最新节点为尾节点
    this.tail = newNode
    return this
  }

  /**
   * 删除结点，返回被删除的结点
   *
   * @param {T} value
   * @returns {(DoublyLinkedListNode<T> | null)}
   * @memberof DoublyLinkedList
   */
  delete(value: T): DoublyLinkedListNode<T> | null {
    if (!this.head) return null

    let deleteNode: DoublyLinkedListNode<T> | null = null
    let currentNode: DoublyLinkedListNode<T> | null = this.head

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode

        if (deleteNode === this.head) {
          // 头结点被删除
          this.head = deleteNode.next
          if(this.head) {
            this.head.previous = null
          }
          // 所有结点都是相同值，将会删除所有结点
          if (deleteNode === this.tail) {
            this.tail = null
          }
        } else if (deleteNode === this.tail) {
          // 删除尾节点
          this.tail = (deleteNode as DoublyLinkedListNode<T>).previous;
          (<DoublyLinkedListNode<T>>this.tail).next = null
        } else {
          // 删除中间结点
          const previousNode = deleteNode.previous
          const nextNode = deleteNode.next;

          (previousNode as DoublyLinkedListNode<T>).next = nextNode;
          (nextNode as DoublyLinkedListNode<T>).previous = previousNode
        }
      }
      currentNode = currentNode.next
    }

    return deleteNode
  }


}