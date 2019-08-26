import BinarySearchTreeNode from './binarySearchTreeNode'


export default class BinarySearchTree<V> {
  root: BinarySearchTreeNode<V>
  constructor(nodeValueCompareFunc?: any) {
    this.root = new BinarySearchTreeNode(nodeValueCompareFunc)
  }

  insert(value: V) {
    this.root.insert(value)
  }

  remove(value: V) {
    this.root.remove(value)
  }

  contains(value: V) {
    return this.root.contains(value)
  }
}