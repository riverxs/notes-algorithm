import { compareFn } from './../../utils/comparator/comparator';
import MinHeap from "../heap/MinHeap";
import Comparator from "../../utils/comparator/comparator";

/**
 * @description 在计算机科学中, 优先级队列(priority queue) 是一种抽象数据类型, 它类似于常规的队列或栈,
 * 但每个元素都有与之关联的“优先级”。在优先队列中, 低优先级的元素之前前面应该是高优先级的元素。
 * 如果两个元素具有相同的优先级, 则根据它们在队列中的顺序是它们的出现顺序即可。
 * 优先队列虽通常用堆来实现,但它在概念上与堆不同。优先队列是一个抽象概念，就像“列表”或“图”这样的抽象概念一样;
 * 正如列表可以用链表或数组实现一样，优先队列可以用堆或各种其他方法实现,例如无序数组。
 * 优先队列用堆（二叉堆）来实现，具有O(log n)时间复杂度的插入元素性能，O(n)的初始化构造的时间复杂度。
 *
 * 优先队列至少需要支持下述操作：
 * 插入带优先级的元素（insert_with_priority）
 * 取出具有最高优先级的元素（pull_highest_priority_element）
 * 查看最高优先级的元素（peek）：O(1) 时间复杂度
 * 其它可选的操作：
 * -检查优先级高的一批元素
 * -清空优先队列
 * -批插入一批元素
 * -合并多个优先队列
 * -调整一个元素的优先级
 * @export
 * @class PriorityQueue
 * @extends {MinHeap<V>}
 * @template V
 */
export default class PriorityQueue<V> extends MinHeap<V> {
  private priorities: Map<V, number>
  constructor() {
    super()
    this.priorities = new Map()
    this.compare = new Comparator(this.comparePriority.bind(this))
  }

  /**
   * @description 添加一个元素（带优先级）到优先队列
   * @param {V} item
   * @param {number} [priority=0]
   * @returns {PriorityQueue<V>}
   * @memberof PriorityQueue
   */
  append(item: V, priority: number = 0): PriorityQueue<V> {
    this.priorities.set(item, priority)
    super.add(item)
    return this
  }

  /**
   * @description 删除元素
   * @param {V} item
   * @param {compareFn} [compareFn]
   * @returns {PriorityQueue<V>}
   * @memberof PriorityQueue
   */
  delete(item: V, compareFn?: compareFn): PriorityQueue<V> {
    super.remove(item, new Comparator(compareFn))
    this.priorities.delete(item)
    return this
  }

  /**
   * @description 查看最高优先级的元素 ???
   * @returns
   * @memberof PriorityQueue
   */
  peek() {
    return super.peek()
  }

  /**
   * @description 取出具有最高优先级的元素
   * @returns
   * @memberof PriorityQueue
   */
  poll() {
    this.priorities.delete(this.peek()!)
    return super.poll()
  }

  /**
   * @description
   * @param {V} item
   * @param {number} priority
   * @returns {PriorityQueue<V>}
   * @memberof PriorityQueue
   */
  changePriority(item: V, priority: number): PriorityQueue<V> {
    this.delete(item, new Comparator().compare)
    this.append(item, priority)
    return this
  }

  /**
   * @description 优先级比较函数
   * @param {V} a
   * @param {V} b
   * @returns
   * @memberof PriorityQueue
   */
  comparePriority(a: V, b: V) {
    if (this.priorities.get(a) === this.priorities.get(b)) return 0
    return this.priorities.get(a)! < this.priorities.get(b)! ? -1 : 1
  }

  /**
   * @description 检查是否存在item
   * @param {V} item
   * @returns {boolean}
   * @memberof PriorityQueue
   */
  hasValue(item: V): boolean {
    return super.hasItem(item)
  }
}