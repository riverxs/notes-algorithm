import Comparator from '../../utils/comparator/comparator'
import HashTable from '../hash_table/HashTable'

/**
 * 同时拥有链表的插入和有序数组的查找优势的数据结构
 * 实现组成BinaryTreeNode最小完备API
 * @export
 * @class BinaryTreeNode
 * @template V
 */
export default class BinaryTreeNode<V> {
  left: BinaryTreeNode<V> | null
  right: BinaryTreeNode<V> | null
  parent: BinaryTreeNode<V> | null
  value: V | null
  meta: HashTable<any>
  compare: Comparator
  constructor(value = null) {
    this.left = null
    this.right = null
    this.parent = null
    this.value = value
    this.meta = new HashTable()
    this.compare = new Comparator()
  }

  /**
   * 左树高度，递归定义
   *
   * @readonly
   * @type {number}
   * @memberof BinaryTreeNode
   */
  get leftHeight(): number {
    if (!this.left) return 0
    return this.left.height + 1
  }

  /**
   * 右树定义，递归定义
   *
   * @readonly
   * @type {number}
   * @memberof BinaryTreeNode
   */
  get rightHeight(): number {
    if (!this.right) return 0
    return this.right.height + 1
  }

  /**
   * 结点高度，取左右树高度最大值
   *
   * @readonly
   * @memberof BinaryTreeNode
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  /**
   * 高度差
   *
   * @readonly
   * @memberof BinaryTreeNode
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  /**
   * 返回结点的uncle结点
   *
   * @readonly
   * @type {(BinaryTreeNode<V> | null)}
   * @memberof BinaryTreeNode
   */
  get uncle(): BinaryTreeNode<V> | null {
    if (!this.parent) return null
    if (!this.parent.parent) return null
    if (!this.parent.parent.left || !this.parent.parent.right) return null
    if (this.compare.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right
    }
    return this.parent.parent.left
  }

  /**
   * 更新值
   *
   * @param {*} value
   * @returns {BinaryTreeNode<V>}
   * @memberof BinaryTreeNode
   */
  setValue(value: V): BinaryTreeNode<V> {
    this.value = value
    return this
  }

  /**
   * 更改左结点为node
   *
   * @param {BinaryTreeNode<V>} node
   * @returns {BinaryTreeNode<V>}
   * @memberof BinaryTreeNode
   */
  setLeft(node: BinaryTreeNode<V>): BinaryTreeNode<V> {
    if (this.left) {
      // 断开左结点链接
      this.left.parent = null
    }
    this.left = node
    if (this.left) {
      this.left.parent =  this
    }
    return this
  }

    /**
   * 更改右结点为node
   *
   * @param {BinaryTreeNode<V>} node
   * @returns {BinaryTreeNode<V>}
   * @memberof BinaryTreeNode
   */
  setRight(node: BinaryTreeNode<V>): BinaryTreeNode<V> {
    if (this.right) {
      // 断开左结点链接
      this.right.parent = null
    }
    this.right = node
    if (this.right) {
      this.right.parent =  this
    }
    return this
  }

  /**
   * 删除指定结点
   *
   * @param {BinaryTreeNode<V>} nodeToRemove
   * @returns boolean
   * @memberof BinaryTreeNode
   */
  removeChild(nodeToRemove: BinaryTreeNode<V>): boolean {
    if (this.left && this.compare.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }
    if (this.right && this.compare.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }
    return false;
  }

  /**
   * 顺序遍历Node
   *
   * @returns {V[]}
   * @memberof BinaryTreeNode
   */
  traverseInOrder(): (V | null)[] {
    let traverse: (V | null)[] = []
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }
    traverse.push(this.value)
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    return traverse
  }

  /**
   * 返回字符串
   *
   * @returns
   * @memberof BinaryTreeNode
   */
  toString() {
    return this.traverseInOrder().toString()
  }
}
