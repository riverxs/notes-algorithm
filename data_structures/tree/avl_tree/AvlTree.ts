import BinarySearchTree from '../binary_search_tree/binarySearchTree'
import BinarySearchTreeNode from '../binary_search_tree/binarySearchTreeNode';

export default class AvlTree<V> extends BinarySearchTree<V> {

  /**
   * @description
   * @param {V} value
   * @memberof AvlTree
   */
  insert(value: V) {
    super.insert(value)
    let currNode = this.root.find(value)
    while (currNode) {
      this.balance(currNode)
      currNode = currNode.parent
    }
  }

  /**
   * @description
   * @param {V} value
   * @memberof AvlTree
   */
  remove(value: V) {
    super.remove(value)
    this.balance(this.root)
  }

  /**
   * @description
   * @param {BinarySearchTreeNode<V>} node
   * @memberof AvlTree
   */
  balance(node: BinarySearchTreeNode<V>) {

  }
}