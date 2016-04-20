// 链表实现
class Stack {
	constructor() {
		this.first = null
		this.n = 0
	}

	push(ele) {
		let oldFirst = this.first
		this.first = {
			item: ele,
			next: oldFirst
		}
		this.n++
	}

	pop() {
		let item = this.first.item
		this.first = this.first.next
		this.n--
		return item
	}

	length() {
		return this.n
	}

	isEmpty() {
		return this.n === 0
	}
}