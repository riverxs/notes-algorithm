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


  /**
   * 查找双向链表中的值，有则返回该结点，无返回null, 当提供
   * 第二个可选函数参数，当满足条件则返回该结点，无返回null
   *
   * @param {T} value
   * @param {(value: T) => boolean} [callback]
   * @returns {(DoublyLinkedListNode<T> | null)}
   * @memberof DoublyLinkedList
   */
  find(value?: T, callback?: (value: T) => boolean): DoublyLinkedListNode<T> | null {
    if (!this.head) return null
    let currentNode: DoublyLinkedListNode<T> | null = this.head

    while(currentNode) {
      if (callback && callback(currentNode.value)) return currentNode
      if (value && value === currentNode.value) return currentNode
      currentNode = currentNode.next
    }

    return null
  }


  /**
   * 存在头结点则返回删除的头结点，不存在则返回null
   *
   * @returns {(DoublyLinkedListNode<T> | null)}
   * @memberof DoublyLinkedList
   */
  deleteHead(): DoublyLinkedListNode<T> | null {
    if (!this.head) return null
    const deleteNode = this.head
    if (this.head.next) {
      this.head = this.head.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }
    return deleteNode
  }

  deleteTail(): DoublyLinkedListNode<T> | null {
    if (!this.head) return null
    const deleteNode = this.tail

    if ((this.tail as DoublyLinkedListNode<T>).previous) {
      this.tail = (this.tail as DoublyLinkedListNode<T>).previous;
      (this.tail as DoublyLinkedListNode<T>).next = null
    } else {
      this.head = null
      this.tail = null
    }
    return deleteNode
  }


  /**
   * 反转双向链表，返回翻转后的实例
   *
   * @returns {DoublyLinkedList<T>}
   * @memberof DoublyLinkedList
   */
  reverse(): DoublyLinkedList<T> {
    let currentNode = this.head
    let nextNode = null
    let prevNode = null

    while(currentNode) {
      // 暂存下一个结点与前一个结点
      nextNode = currentNode.next
      prevNode = currentNode.previous

      // 改变当前结点的前置和后置结点
      currentNode.previous = nextNode
      currentNode.next = prevNode

      // 更改当前结点
      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }

  /**
   * 使用数组的元素生成双向链表
   *
   * @param {T[]} values
   * @returns {DoublyLinkedList<T>}
   * @memberof DoublyLinkedList
   */
  fromArray(values: T[]): DoublyLinkedList<T> {
    values.forEach(value => this.append(value))
    return this
  }

  /**
   * 返回双向链表值的数组集合
   *
   * @returns {T[]}
   * @memberof DoublyLinkedList
   */
  toArray(): DoublyLinkedListNode<T>[] {
    const nodes = []

    let currentNode = this.head
    while(currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  /**
   * 格式化双向链表，字符串形式输出
   *
   * @param {(value: any) => string} [callback]
   * @returns {string}
   * @memberof DoublyLinkedList
   */
  toString(callback?: (value: any) => string): string {
    return this.toArray().map( node => node.toString(callback)).toString()
  }

  /**
   * 查看双向链表的长度
   *
   * @returns {number}
   * @memberof DoublyLinkedList
   */
  length(): number {
    return this.toArray().length
  }
}