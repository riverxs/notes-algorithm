import BinarySearchTreeNode from './binarySearchTreeNode'


export default class BinarySearchTree<V> {
  root: BinarySearchTreeNode<V>
  constructor(nodeValueCompareFunc?: any) {
    this.root = new BinarySearchTreeNode(nodeValueCompareFunc)
  }

  insert(value: V) {
    return this.root.insert(value)
  }

  remove(value: V) {
    return this.root.remove(value)
  }

  contains(value: V) {
    return this.root.contains(value)
  }
}