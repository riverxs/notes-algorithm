import LinkedListNode from './LinkedListNode';
import Comparator from '../utils/comparator';

type comparableType = string | number
type compareResult = 0 | -1 | 1
interface compareFn {
  (a: comparableType, b: comparableType) : compareResult | Error
}

type Node<T> = LinkedListNode<T> | null

export default class LinkedList<T> {
  public head: Node<T>
  public tail: Node<T>
  private compare: Comparator

  /**
   * Creates an instance of LinkedList.
   * @param {compareFn} comparatorFn
   * @memberof LinkedList
   */
  constructor(comparatorFn?: compareFn) {
    this.head = null
    this.tail = null
    this.compare = new Comparator(comparatorFn)
  }

  /**
   * 在链表前端插入一个节点
   *
   * @param {T} value
   * @returns an instance of LinkedList.
   * @memberof LinkedList
   */
  prepend(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * 在链表后端插入一个节点
   *
   * @param {T} value
   * @returns an instance of LinkedList
   * @memberof LinkedList
   */
  append(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    (<LinkedListNode<T>>this.tail).next = newNode
    this.tail = newNode

    return this
  }

  /**
   * 删除链表中的节点
   *
   * @param {*} value
   * @returns deleteNode
   * @memberof LinkedList
   */
  delete(value: T): Node<T> {
    if (!this.head) return null

    let deleteNode = null

    // 删除头结点
    if (this.compare.equal(this.head.value, value)) {
      deleteNode = this.head
      this.head = this.head.next;
    }
    let currentNode = this.head

    if (currentNode !== null) {
      while(currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deleteNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // 删除尾节点
    if (this.compare.equal((<LinkedListNode<T>>this.tail).value, value)) {
      this.tail = currentNode
    }

    return deleteNode
  }


  /**
   * 查找元素节点，并提供自定义匹配规则
   *
   * @param {T} value
   * @param {(value: T) => boolean} [callback]
   * @returns LinkedListNode | null
   * @memberof LinkedList
   */
  find(value: T, callback?: (value: T) => boolean): Node<T> {
    if (!this.head) return null

    let currentNode = this.head

    while(currentNode !== null) {
      if (callback && callback(currentNode.value)) return currentNode

      if (this.compare.equal(currentNode.value, value)) return currentNode

      currentNode = (<LinkedListNode<T>>currentNode.next)
    }
    return null
  }

  /**
   * 删除尾节点
   *
   * @returns LinkedListNode
   * @memberof LinkedList
   */
  deleteTail(): Node<T> {
    const deleteTail = this.tail
    // 只有一个节点
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deleteTail
    }

    // 有很多节点
    let currentNode = this.head

    if (currentNode !== null) {
      while(currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null
        } else {
          currentNode = currentNode.next
        }
      }
    }

    this.tail = currentNode

    return deleteTail
  }

  /**
   * 删除头节点
   *
   * @returns LinkedListNode
   *
   * @memberof LinkedList
   */
  deleteHead(): Node<T> {
    if (!this.head) return null

    const deleteHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deleteHead
  }

  /**
   * 将链表转成数组便于输出查看
   *
   * @returns [T]
   * @memberof LinkedList
   */
  toArray(): LinkedListNode<T>[] {
    let nodes = []

    let currentNode = this.head
    while(currentNode !== null) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * @returns string
   *
   * @memberof LinkedList
   */
  toString(callback?: (value: T) => string): string {
    return this.toArray().map(node => node.toString(callback)).toString()
  }

  /**
   * 用于从一个数组生成链表
   *
   * @param {[T]} values
   * @returns an instance of LinkedList
   * @memberof LinkedList
   */
  formArray(values: T[]): LinkedList<T> {
    values.forEach(value => this.append(value))
    return this
  }

  /**
   * 反转链表
   *
   * @returns an instance of reversion LinkedList
   * @memberof LinkedList
   */
  reverse() {

  }
}