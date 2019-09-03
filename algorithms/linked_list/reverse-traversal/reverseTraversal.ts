import LinkedListNode from "../../../data_structures/linked_list/LinkedListNode";
import LinkedList from "../../../data_structures/linked_list/LinkedList";

type Callback<V> = (v: V) => void

/**
 * @description 递归linkedList
 * @template V
 * @param {(LinkedListNode<V> | null)} node
 * @param {(v: V) => void} callback
 */
function reverseTraversalRecursive<V>(node: LinkedListNode<V> | null, callback: Callback<V>) {
  if (node) {
    reverseTraversalRecursive(node.next, callback)
    callback(node.value)
  }
}

/**
 * @description 调用递归函数
 * @export
 * @template V
 * @param {LinkedList<V>} linkedList
 * @param {Callback<V>} callback
 */
export default function reverseTraversal<V>(linkedList: LinkedList<V>, callback: Callback<V>) {
  reverseTraversalRecursive(linkedList.head, callback)
}
