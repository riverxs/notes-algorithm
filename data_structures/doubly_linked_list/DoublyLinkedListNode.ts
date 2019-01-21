
type DoublyAlias<T> = DoublyLinkedListNode<T> | null

export default class DoublyLinkedListNode<T> {
  constructor(public value: T, public next: DoublyAlias<T> = null, public previous: DoublyAlias<T> = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  toString(cb?: (val: T ) => void ) {
    return cb ? cb(this.value) : `${this.value}`
  }
}



