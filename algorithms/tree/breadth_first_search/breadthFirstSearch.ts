import Queue from "../../../data_structures/queue/Queue";
import BinaryTreeNode from "../../../data_structures/tree/BinaryTreeNode";

export interface Callback<V> {
  allowTraversal: (currNode: BinaryTreeNode<V>, nextNode: BinaryTreeNode<V>) => boolean,
  enterNode: (node?: BinaryTreeNode<V>) => any,
  leaveNode: (node?: BinaryTreeNode<V>) => any,
}

/**
 * @description 工具对象
 * @template V
 * @param {Callback<V>} [callbacks={}]
 * @returns
 */
export function initCallbacks<V>(callbacks: Callback<V>) {
  const initiatedCallback = callbacks
  const stubCallback = () => {}
  const defaultAllowTraversal = () => true

  initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal
  initiatedCallback.enterNode = callbacks.enterNode || stubCallback
  initiatedCallback.leaveNode = callbacks.leaveNode || stubCallback
  return initiatedCallback
}

/**
 * @description 广度优先搜索二叉树
 * @export
 * @template V
 * @param {BinaryTreeNode<V>} rootNode
 * @param {Callback<V>} orginalCallback
 */
export default function breadthFirstSearch<V>(rootNode: BinaryTreeNode<V>, orginalCallback: Callback<V>) {
  const callbacks = initCallbacks(orginalCallback)
  const nodeQueue = new Queue<BinaryTreeNode<V>>()
  nodeQueue.enqueue(rootNode)
  while(!nodeQueue.isEmpty()) {
    // 取队列前端值
    const currentNode = nodeQueue.dequeue()
    // BFS开始搜索结点之前
    callbacks.enterNode(currentNode as BinaryTreeNode<V>)
    // 左结点进入队列
    if ( currentNode && currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
      nodeQueue.enqueue(currentNode.left)
    }
    // 右结点进入队列
    if (currentNode && currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
      nodeQueue.enqueue(currentNode.right)
    }
    // BFS开始搜索结点之后
    callbacks.leaveNode(currentNode as BinaryTreeNode<V>)
  }
}