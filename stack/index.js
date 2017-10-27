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
		let digit = [] // 根据to设定
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

// test
let cc = new Convert()
console.log(cc.numConvert(238,10))


// 括号匹配 bracket match

// 具有自相似性的问题可递归描述，但分支位置和嵌套深度不固定

// 问题不断简化策略, 使用栈结构扩展性更强
// 只需约定“括号”通用格式，而不必事先固定括号的类型与数目

function paren(exp, m1, m2) {
	let stack = new Stack() // 使用栈记录已发现但尚未匹配的左括号

	for(let i=0; i<exp.length; i++) {
		if(m1[0] === exp[i] || m2[0] === exp[i]) {
			stack.push(exp[i]) // 左括号进栈
		}else if (!stack.isEmpty() && stack.top() === ){
			stack.pop() // 栈非空，遇右括号出栈
		}else return false
	}

	return stack.isEmpty()
}
  
// test
let exp = '([])()(())'
console.log(paren(exp, '()', '[]'))
