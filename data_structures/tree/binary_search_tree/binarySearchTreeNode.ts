import BinaryTreeNode from '../BinaryTreeNode'
import Comparator from '../../../utils/comparator/comparator'


export default class BinarySearchTreeNode<V> extends BinaryTreeNode<V> {
  nodeValueCompare: Comparator

  constructor(value: V | null = null, public compareFunc: any = undefined) {
    super(value)
    this.nodeValueCompare = new Comparator(compareFunc)
  }

  insert(value: V): BinarySearchTreeNode<V> {
    if (this.value === null) {
      this.value = value
      return this
    }

    if (this.nodeValueCompare.greaterThan(value, this.value)) {
      if (this.right) {
        return (this.right as BinarySearchTreeNode<V>).insert(value)
      }
      const node = new BinarySearchTreeNode<V>(value, this.compareFunc)
      this.setRight(node)
      return node
    }

    if (this.nodeValueCompare.lessThan(value, this.value)) {
      if (this.left) {
        return ((this.left as BinarySearchTreeNode<V>)).insert(value)
      }
      const node = new BinarySearchTreeNode<V>(value, this.compareFunc)
      this.setLeft(node)
      return node
    }

    return this
  }

  find(value: V): BinarySearchTreeNode<V> | null {
    if (this.nodeValueCompare.equal(value, this.value)) {
      return this
    }

    if (this.nodeValueCompare.greaterThan(value, this.value) && this.right) {
      return (this.right as BinarySearchTreeNode<V>).find(value)
    }

    if (this.nodeValueCompare.lessThan(value, this.value) && this.left) {
      return (this.left as BinarySearchTreeNode<V>).find(value)
    }

    return null
  }

  contains(value: V): boolean {
    return !!this.find(value);
  }

  findMin(): BinarySearchTreeNode<V> {
    if (!this.left) {
      return this
    }
    return (this.left as BinarySearchTreeNode<V>).findMin()
  }

  remove(value: V): boolean {
    const nodeToRemove = this.find(value)
    if (!nodeToRemove) {
      throw new Error('Item not found in the tree')
    }
    const { parent } = nodeToRemove
    // 不存在子结点
    if (!nodeToRemove.left && !nodeToRemove.right) {
      // 存在父节点，直接删除子节点
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        // 否则，将节点值设为null
        nodeToRemove.setValue(null)
      }
    } else if (nodeToRemove.left && nodeToRemove.right) { // 同时存在左右子结点
        const nextBiggerNode = (nodeToRemove.right as BinarySearchTreeNode<V>).findMin()
        // 如比删除结点更大一点的结点是删除结点的右子结点(右树不存在左子节点),直接重置值与链接
        if (this.compare.equal(nextBiggerNode, nodeToRemove.right)) {
          nodeToRemove.setValue(nodeToRemove.right.value)
          nodeToRemove.setRight(nodeToRemove.right.right)
        } else {
          // 右子树存在左子树，递归删除
          this.remove((nextBiggerNode.value as V))
          // 删除值绑定
          nodeToRemove.setValue(nextBiggerNode.value)
        }
    } else { // 存在单个子结点
      const childNode = nodeToRemove.left || nodeToRemove.right
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode as BinarySearchTreeNode<V>)
      } else {
        nodeToRemove.setValue((childNode as BinarySearchTreeNode<V>).value)
        nodeToRemove.setLeft((childNode as BinarySearchTreeNode<V>).left)
        nodeToRemove.setRight((childNode as BinarySearchTreeNode<V>).right)
      }
    }
    // 清除删除结点的父结点
    nodeToRemove.parent = null
    return true
  }
}