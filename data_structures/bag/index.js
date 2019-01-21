// 背包：一种不支持从中删除元素的集合数据类型，它的目的就是迭代遍历收集到的元素，
// 且迭代的不一定有序
// 链表实现，和栈的实现完全一样，数组本身就具有背包的性质

class Bag {
	constructor() {
		this.first = null
		this.n = 0
	}

	add(ele) {
		let oldFirst = this.first
		this.first = {
			item: ele,
			next: oldFirst
		}
		this.n++
	}

	length() {
		return this.n
	}

	isEmpty() {
		return this.n === 0
	}
	// 显示背包里的元素
	show() {
		let headNode = this.first 
		while(headNode !== null){
			console.log(headNode.item)
			headNode = headNode.next
		}
	}
}

module.exports = Bag