// 背包：一种不支持从中删除元素的集合数据类型，它的目的就是迭代遍历收集到的元素，且迭代的不一定有序
import LinkedList from '../linked_list/LinkedList'

export default class Bag<T> {
  private bag: LinkedList<T>
  constructor() {
    this.bag = new LinkedList()
  }

  /**
   * 向背包中添加元素
   *
   * @param {T} item
   * @memberof Bag
   */
  add(item: T): void {
    this.bag.append(item)
  }

  /**
   * 判断背包是否为空
   *
   * @returns {boolean}
   * @memberof Bag
   */
  isEmpty(): boolean {
    return this.bag.length() === 0
  }

  /**
   * 返回背包大小
   *
   * @returns {number}
   * @memberof Bag
   */
  size(): number {
    return this.bag.length()
  }
}