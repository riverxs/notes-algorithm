import LinkedList from "../../../data_structures/linked_list/LinkedList";

/**
 * @description 遍历链表并对链表上的每个值添加行为
 * @export
 * @template V
 * @param {LinkedList<V>} linkedList
 * @param {(val: V) => void} callback
 */
export default function traversal<V>(linkedList: LinkedList<V>, callback: (val: V) => void) {
  let currentNode = linkedList.head
  while(currentNode) {
    callback(currentNode.value)
    currentNode = currentNode.next
  }
}
