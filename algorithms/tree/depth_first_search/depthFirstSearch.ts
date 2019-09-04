import { Callback, initCallbacks } from './../breadth_first_search/breadthFirstSearch';
import BinaryTreeNode from "../../../data_structures/tree/BinaryTreeNode";

/**
 * @description 深度遍历二叉树
 * @export
 * @template V
 * @param {BinaryTreeNode<V>} rootNode
 * @param {Callback<V>} callbacks
 */
export default function depthFirstSearch<V>(rootNode: BinaryTreeNode<V>, callbacks: Callback<V>) {
  const processedCallbacks = initCallbacks(callbacks)
  function depthProcessRecursive(node: BinaryTreeNode<V>, cb: Callback<V>) {
    cb.enterNode(node)
    if (node.left && cb.allowTraversal(node, node.left)) {
      depthProcessRecursive(node.left, cb)
    }
    if (node.right && cb.allowTraversal(node, node.right)) {
      depthProcessRecursive(node.right, cb)
    }
    // 当结点和子结点搜索完后调用
    cb.leaveNode(node)
  }
  depthProcessRecursive(rootNode, processedCallbacks)
}