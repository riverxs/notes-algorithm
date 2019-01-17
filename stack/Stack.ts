import LinkedList from '../linked_list/LinkedList'
import LinkedListNode from '../linked_list/LinkedListNode';

export default class Stack<T> {
  private linkedList: LinkedList<T>

  /**
   * Creates an empty instance of Stack.
   * implement Stack based on LinkedList
   * LIFO: last in first out
   * @memberof Stack
   */
  constructor() {
    this.linkedList = new LinkedList()
  }

  /**
   * 判断栈是否为空
   *
   * @returns {boolean}
   * @memberof Stack
   */
  isEmpty(): boolean {
    return !this.linkedList.head
  }

  /**
   * 查看栈顶的元素(不是弹出栈顶元素)
   *
   * @memberof Stack
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null
    }

    return (this.linkedList.head as LinkedListNode<T>).value
  }

  /**
   * 入栈
   *
   * @param {T} value
   * @memberof Stack
   */
  push(value: T): void {
    this.linkedList.append(value)
  }

  /**
   * 出栈
   *
   * @returns {(T | null)}
   * @memberof Stack
   */
  pop(): T | null {
    const removedHead = this.linkedList.deleteHead()
    return removedHead ? removedHead.value : null
  }

  /**
   * 以数组形式返回栈空间的内容
   *
   * @returns {T[]}
   * @memberof Stack
   */
  toArray(): T[] {
    return this.linkedList.toArray().map( node => node.value)
  }

  /**
   * 以字符串返回栈内容
   *
   * @param {(value: T) => string} [callback]
   * @returns {string}
   * @memberof Stack
   */
  toString(callback?: (value: T) => string ): string {
    return this.linkedList.toString(callback)
  }

  /**
   * 返回栈长度
   *
   * @returns {number}
   * @memberof Stack
   */
  length(): number {
    return this.toArray().length
  }
}



