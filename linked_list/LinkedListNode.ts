export default class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {
    this.value = value
    this.next = next
  }

  toString(cb?: (val: T ) => void ) {
    return cb ? cb(this.value) : `${this.value}`
  }
}

