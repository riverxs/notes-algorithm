import LinkedList from '../linked_list/LinkedList'

export default class Queue<T> {
  private linkedList: LinkedList<T>

  /**
   * Creates an instance of Queue.
   * implement Queue based on LinkedList
   * @memberof Queue
   */
  constructor() {
    this.linkedList = new LinkedList()
  }

  /**
   * enqueue
   *
   * @param {T} value
   * @memberof Queue
   */
  enqueue(value: T): void {
    this.linkedList.append(value)
  }

  /**
   * dequeue
   *
   * @returns {(T | null)}
   * @memberof Queue
   */
  dequeue(): T | null {
    const removeEle = this.linkedList.deleteHead()
    return removeEle ? removeEle.value : null
  }


  /**
   * find element at the front of queue
   *
   * @returns {T}
   * @memberof Queue
   */
  peek(): T | null {
    if (!this.linkedList.head) return null
    return this.linkedList.head.value
  }

  /**
   * judge whether the queue is enpty or not
   *
   * @returns {boolean}
   * @memberof Queue
   */
  isEmpty(): boolean {
    return !this.linkedList.head
  }


  /**
   * compute the length of queue
   *
   * @returns {number}
   * @memberof Queue
   */
  length(): number {
    return this.linkedList.toArray().length
  }


  /**
   * translate the queue to the array structure
   *
   * @returns {T[]}
   * @memberof Queue
   */
  toArray(): T[] {
    return this.linkedList.toArray().map( node => node.value)
  }

  toString(callback?: (value: T) => string): string {
    return this.linkedList.toString(callback)
  }
}