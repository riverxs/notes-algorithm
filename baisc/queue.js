// 先入先出的数据结构 first in first out
// 链表实现

class Queue{
	constructor(){
		this.first = null  // 指向最早添加
		this.last = null   // 指向最近添加
		this.n = 0
	}
	// 入队
	enqueue(ele) {
		let oldLast = this.last
		if(this.isEmpty()){
			this.first = this.last = {
				item: ele,
				next: null
			}
		}else{
			oldLast.next = this.last = {
				item: ele,
				next: null
			}
		}

		this.n++
	}
	// 出队
	dequeue() {
		let item =  first.item
		first = first.next
		if(this.isEmpty()) last = null
		else{
			this.n--
		}
		return item
	}

	isEmpty() {
		return this.n === 0
	}

	length() {
		return this.n
	}
}
