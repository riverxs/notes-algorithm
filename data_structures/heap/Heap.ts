import Comparator, { compareFn } from '../../utils/comparator/comparator';

/**
 * @ 堆（Heap）是计算机科学中的一种特别的树状数据结构（完全二叉树）。若是满足以下特性，
 * 即可称为堆：“给定堆中任意节点P和C，若P是C的母节点，那么P的值会小于等于
 * （或大于等于）C的值”。若母节点的值恒小于等于子节点的值，此堆称为最小堆（min heap）；
 * 反之，若母节点的值恒大于等于子节点的值，此堆称为最大堆（max heap）。在堆中最顶端的那一个节点，
 * 称作根节点（root node），根节点本身没有母节点（parent node）。
 * 将根节点最大的堆叫做最大堆或大根堆，根节点最小的堆叫做最小堆或小根堆。常见的堆有二叉堆、斐波那契堆等。
 *
 * 完全二叉树是效率很高的数据结构，完全二叉树是由满二叉树而引出来的。对于深度为K的，
 * 有n个结点的二叉树，当且仅当其每一个结点都与深度为K的满二叉树中编号从1至n的结点一一对应时称之为完全二叉树。
 * (通俗来说：完全二叉树不一定是满二叉树，当一层已满容纳不下新的节点时，新的一层从左至右来盛放新节点，缺失的节点一定在右侧)
 *
 * 主流实现：二叉堆
 * 用途：堆排序，优先队列
 * @export
 * @class Heap
 */
export default class Heap<V> {
  private heapContainer: V[]
  compare: Comparator

  /**
   * Creates an instance of Heap.
   * @param {compareFn} comparatorFunc
   * @memberof Heap
   */
  constructor(comparatorFunc: compareFn) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }
    // 使用数组存储堆数据
    this.heapContainer = []
    this.compare = new Comparator(comparatorFunc)
  }

  /**
   * @ 取父节点在数组中的存储索引
   * @param {number} index
   * @returns {number}
   * @memberof Heap
   */
  private getParentIndex(index: number): number {
    return Math.floor((index -1) / 2)
  }

  /**
   * @description 取左子节点在数组中的存储index
   * @param {number} index
   * @returns {number}
   * @memberof Heap
   */
  private getLeftChildIndex(index: number): number {
    return (2 * index) + 1
  }

  /**
   * @description 取右子节点在数组中的存储index
   * @param {number} index
   * @returns {number}
   * @memberof Heap
   */
  private getRightChildIndex(index: number): number {
    return (2 * index) + 2
  }

  /**
   * @description 是否存在父节点
   * @param {number} index
   * @returns {boolean}
   * @memberof Heap
   */
  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0
  }

  /**
   * @description 是否存在左子节点
   * @param {number} index
   * @returns {boolean}
   * @memberof Heap
   */
  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heapContainer.length
  }

  /**
   * @description 是否存在右子节点
   * @param {number} index
   * @returns {boolean}
   * @memberof Heap
   */
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heapContainer.length
  }

  /**
   * @description 取父节点
   * @param {number} index
   * @returns {V}
   * @memberof Heap
   */
  private parent(index: number): V {
    return this.heapContainer[this.getParentIndex(index)]
  }

  /**
   * @description 取左子节点
   * @param {number} index
   * @returns {V}
   * @memberof Heap
   */
  private leftChild(index: number): V {
    return this.heapContainer[this.getLeftChildIndex(index)]
  }

  /**
   * @description 取右子节点
   * @param {number} index
   * @returns {V}
   * @memberof Heap
   */
  private rightChild(index: number): V {
    return this.heapContainer[this.getRightChildIndex(index)]
  }

  /**
   * @description 交换任意两个节点的内容
   * @param {number} indexOne
   * @param {number} indexTwo
   * @memberof Heap
   */
  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = temp
  }

    /**
   * @description 上浮元素使其堆化
   * @param {number} customStartIndex
   * @memberof Heap
   */
  private heapifyUp(customStartIndex?: number) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1
    while (
      this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }
  }

  /**
   * @description 下浮元素使其堆化
   * @param {number} [customStartIndex=0]
   * @memberof Heap
   */
  private heapifyDown(customStartIndex: number = 0) {
    let currentIndex = customStartIndex
    let nextIndex = null

    while(this.hasLeftChild(currentIndex)) {
      // Compare the parent element to its children and swap parent with the appropriate
      // child (smallest child for MinHeap, largest child for MaxHeap).
      // Do the same for next children after swap.
      if (
        this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }

      if (!this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex])
      ) {
        this.swap(currentIndex, nextIndex)
        currentIndex = nextIndex
      } else {
        break
      }
    }
  }

  /**
   * @description 取堆顶元素展示并不删除
   * @returns {(V | null)}
   * @memberof Heap
   */
  peek(): V | null {
    if (this.heapContainer.length === 0) return null
    return this.heapContainer[0]
  }

  /**
   * @description 取堆顶元素并删除，类似堆栈的pop
   * @returns {Heap<V>}
   * @memberof Heap
   */
  poll(): V | null {
    if (this.heapContainer.length === 0) return null

    if (this.heapContainer.length === 1) return this.heapContainer.pop()!

    const item = this.heapContainer[0]
    this.heapContainer[0] = this.heapContainer.pop()!
    this.heapifyDown()
    return item
  }

  /**
   * @description 添加元素
   * @param {V} item
   * @returns {Heap<V>}
   * @memberof Heap
   */
  add(item: V): Heap<V> {
    this.heapContainer.push(item)
    this.heapifyUp()
    return this
  }

  /**
   * @description 删除堆中符合筛选条件的元素
   * @param {V} item
   * @param {Comparator} [comparator=this.compare] 筛选条件
   * @returns {Heap<V>}
   * @memberof Heap
   */
  remove(item: V, comparator: Comparator = this.compare): Heap<V> {
    const numberOfItemsToRemove = this.find(item, comparator).length

    for (let iter = 0; iter < numberOfItemsToRemove; iter++) {
      const indexToRemove = this.find(item, comparator).pop()
      // 当需要删除的节点是最后一个，直接pop
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop()
      } else {
        // 将要删除位置的元素替换成最后一个元素，即删除
        this.heapContainer[indexToRemove!] = this.heapContainer.pop()!
        const parentItem = this.parent(indexToRemove!)
        // 当存在左子节点(则为叶子节点)，同时不存在父节点（删除节点本身就为根节点）或 父与子顺序正确，则下浮堆化，否则上浮堆化
        if (
          this.hasLeftChild(indexToRemove!)
          && (
            !parentItem
            || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove!])
          )
        ) {
          this.heapifyDown(indexToRemove)
        } else {
          this.heapifyUp(indexToRemove)
        }
      }
    }
    return this
  }

  /**
   * @description 查找符合比较条件item的index集合
   * @param {V} item
   * @param {Comparator} [comparator=this.compare]
   * @returns
   * @memberof Heap
   */
  find(item: V, comparator: Comparator = this.compare): number[] {
    const foundItemIndices = []

    for (let idx = 0; idx < this.heapContainer.length; idx++) {
      if (comparator.equal(item, this.heapContainer[idx])) {
        foundItemIndices.push(idx)
      }
    }

    return foundItemIndices
  }

  /**
   * @description
   * @param {V} item
   * @param {Comparator} [comparator=this.compare]
   * @returns {boolean}
   * @memberof Heap
   */
  hasItem(item: V, comparator: Comparator = this.compare): boolean {
    return this.find(item, comparator).length !== 0
  }

  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement: V, secondElement: V): boolean {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }

  /**
   * @description 判断是否为空
   * @returns {boolean}
   * @memberof Heap
   */
  isEmpty(): boolean {
    return !this.heapContainer.length
  }

  /**
   * @description 以字符串形式输出显示
   * @returns
   * @memberof Heap
   */
  toString() {
    return this.heapContainer.toString()
  }
}





