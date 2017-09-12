// 先入后出的数据结构 last in first out 
// 该练习链表实现，数组实现也很简单，JS原生提供基于数组的队列方法shift()
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