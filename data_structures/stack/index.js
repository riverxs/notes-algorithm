// 常见数据结构stack

// 先入后出的数据结构LIFO last in first out 
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
    if(this.isEmpty()) {
      throw new Error("the stack is empty, can't pop element.")
    }
		let item = this.first.item
		this.first = this.first.next
		this.n--
		return item
	}

  top() {
    if (this.isEmpty()) {
      throw new Error('Empty stack!')
    }
    return this.first.item
  }

	length() {
		return this.n
	}

	isEmpty() {
		return this.n === 0
	}
}

module.exports = Stack