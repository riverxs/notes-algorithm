import BinarySearchTree from '../binary_search_tree/binarySearchTree'
import BinarySearchTreeNode from '../binary_search_tree/binarySearchTreeNode';
import BinaryTreeNode from '../BinaryTreeNode'
export default class AvlTree<V> extends BinarySearchTree<V> {

  /**
   * @description
   * @param {V} value
   * @memberof AvlTree
   */
  insert(value: V) {
    super.insert(value)
    let currNode: BinaryTreeNode<V> | null = this.root.find(value)
    while (currNode) {
      this.balance(currNode as BinarySearchTreeNode<V>)
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
   * @ banlance tree node, greater 1 or less -1 both need to banlance
   *
   * @param {BinarySearchTreeNode<V>} node
   * @memberof AvlTree
   */
  balance(node: BinarySearchTreeNode<V>) {
    if (node.balanceFactor > 1) { // 属于README中1,3情况
      if (node.left && node.left.balanceFactor > 0) { // 在左孩子的左子树插入节点(LL)，执行操作(R右旋)
        this.rotateLeftLeft(node)
      } else if (node.left && node.left.balanceFactor < 0) { // 左孩子的右子树插入节点(LR)，对A的左子节点执行L左旋, 对A执行R旋（RR(L) -> LL(R)）
        this.rotateLeftRight(node)
      }
    } else if (node.balanceFactor < -1) { // 属于README中2,4情况
      if (node.right && node.right.balanceFactor > 0) {
        this.rotateRightLeft(node)
      } else if (node.right && node.right.balanceFactor < 0) {
        this.rotateRightRight(node)
      }
    }
  }

  /**
   * @ LL型导致不平衡情形, 对node执行右旋， 参看README解决方案
   * 右旋核心操作： 不平衡node作为node的左子节点的右节点，如果node的左节点存在右节点，则置其为node的左节点，
   * 更新相应父节点
   * @param {BinarySearchTreeNode<V>} node
   * @memberof AvlTree
   */
  rotateLeftLeft(node: BinarySearchTreeNode<V>) {
    const leftNode = node.left
    node.setLeft(null)

    if (node.parent) {
      if (node.parent.left === node) {
        node.parent.setLeft(leftNode)
      } else {
        node.parent.setRight(leftNode)
      }
    } else if (node === this.root) {
      this.root === leftNode
    }

    if (leftNode && leftNode.right) {
      node.setLeft(leftNode.right)
    }

    // 主要操作，名曰右旋
    (leftNode as BinaryTreeNode<V>).setRight(node)
  }

  /**
   * @ LR型导致不平衡情形
   * @param {BinarySearchTreeNode<V>} node
   * @memberof AvlTree
   */
  rotateLeftRight(node: BinarySearchTreeNode<V>) {
    const leftNode = node.left
    node.setLeft(null)

    const leftRightNode = (leftNode as BinaryTreeNode<V>).right;
    (leftNode as BinaryTreeNode<V>).setRight(null)

    // 保留leftRightNode的left subtree
    if (leftRightNode && leftRightNode.left) {
      (leftNode as BinaryTreeNode<V>).setRight(leftRightNode.left)
      leftRightNode.setLeft(null)
    }

    // 此处为左旋核心操作，将leftRightNode置为node的左节点，将leftNode置为leftRightNode的左节点
    node.setLeft(leftRightNode);
    (leftRightNode as BinaryTreeNode<V>).setLeft(leftNode)

    this.rotateLeftLeft(node)
  }

  /**
   * @ RL型导致不平衡情形
   * @param {BinarySearchTreeNode<V>} node
   * @memberof AvlTree
   */
  rotateRightLeft(node: BinarySearchTreeNode<V>) {
    const rightNode = node.right
    node.setRight(null)

    const rightLeftNode = (rightNode as BinaryTreeNode<V>).left;
    (rightNode as BinaryTreeNode<V>).setLeft(null)

    if (rightLeftNode && rightLeftNode.right) {
      (rightNode as BinaryTreeNode<V>).setLeft(rightLeftNode.right)
      rightLeftNode.setRight(null)
    }

    // 右旋rightLeftNode
    node.setRight(rightLeftNode);
    // 右旋rightNode
    (rightLeftNode as BinaryTreeNode<V>).setRight(rightNode)

    this.rotateRightRight(node)
  }

  /**
   * @ RR型导致不平衡情形
   * @param {BinarySearchTreeNode<V>} node
   * @memberof AvlTree
   */
  rotateRightRight(node: BinarySearchTreeNode<V>) {
    const rightNode = node.right
    node.setRight(null)

    // 需平衡节点存在parent，则需重置其parent的子节点
    if (node.parent) {
      if (node.parent.left === node) {
        node.parent.setLeft(rightNode)
      } else {
        node.parent.setRight(rightNode)
      }
    } else if (node === this.root) {
      this.root = rightNode as BinarySearchTreeNode<V>
    }

    if (rightNode && rightNode.left) {
      node.setRight(rightNode.left)
    }

    // 此为左旋操作
    (rightNode as BinaryTreeNode<V>).setLeft(node)
  }
}