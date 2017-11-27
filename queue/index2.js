// 先入先出的数据结构 first in first out
// 基于链表实现
const List = require('../list/index')


class Queue{
	constructor(){
		this.queue = new List()
		this.tailEle = null
	}
	// 入队
	enqueue(ele) {
		this.queue.add(ele)
		this.tailEle = ele
	}
	// 出队
	dequeue() {
		return this.queue.remove(this.queue.first.item)
	}

  tail() {
    return this.tailEle
  }

  front() {
    return this.queue.first.item
  }

}

module.exports = Queue