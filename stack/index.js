// 常见数据结构stack

// FILO

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

    top() {
        return this.first.item
    }
	length() {
		return this.n
	}

	isEmpty() {
		return this.n === 0
	}
}

// test

let stack = new Stack()
stack.push(1)
console.log(stack.isEmpty())


// Javascript原生提供

// class Stack {
// 	constructor() {
// 		this.stack = []
// 	}

// 	push(ele) {
// 		this.stack.push(ele)
// 	} 

// 	pop() {
// 		this.stack.pop()
// 	}

// 	top() {
// 		this.stack[0]
// 	}

// 	isEmpty() {
// 		return this.stack.length === 0
// 	}

// }


// 实际应用

// 1. 进制转换

class Convert {
	constructor() {
		this.stack = new Stack()
		this.res = []
	}

	numConvert(from, to) {
		while(from !== 0) {
			this.stack.push(from%to)
			from = Math.floor(from/to)
		} 

		while(!this.stack.isEmpty()) {
			this.res.push(this.stack.pop())
		}

		return this.res.join('')
	} 

}


let cc = new Convert()
console.log(cc.numConvert(238,8))
