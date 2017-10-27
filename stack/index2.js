//JS Array  implements the Stack structure

class Stack {
	constructor() {
		this.stack = []
	}

	push(ele) {
		this.stack.push(ele)
	} 

	pop() {
		this.stack.pop()
	}

	top() {
		this.stack[0]
	}

	isEmpty() {
		return this.stack.length === 0
	}

}


