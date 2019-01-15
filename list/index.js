/* 数组实现表结构的情况下，插入和删除都需要线性时间的开销
为了避免线性时间的开销，我们可以采用链表来实现表结构，但查找没数组实现效率高
插入元素和删除元素都只用常数时间

链表是在内存中不必连续相连的结构组成
链表一般有: 单链表、静态链表、循环链表、双向链表

单链表：就是很单一的向下传递，每一个节点只记录下一个节点的信息

单链表实现
*/

class LinkedList {
	constructor() {
		this.first = null
		this.n = 0
	}
	// 添加元素
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
	// 找到指定元素的节点
	findNode(ele) {
		// headNode 指向头节点，从头节点向后查找
		let headNode = this.first
		while(headNode.item !== ele && headNode.next !== null){
			headNode = headNode.next
		}
		return headNode
	}
	// 创建一个新的节点作为插入时使用
	createNode(ele) {
		return {
			item: ele,
			next: null
		}
	}
	// 在指定节点后插入一个节点
	insert(curEle, insertEle) {
		let curNode = this.findNode(curEle)
		let insertNode = this.createNode(insertEle)
		insertNode.next = curNode.next
		curNode.next = insertNode
		this.n++
	}
	// 找到指定节点的前一个节点
	findPreNode(ele) {
		let headNode = this.first
		while(headNode !== null && headNode.next.item !== ele){
			headNode = headNode.next
		}

		return headNode
	}

	// 通过元素删除
	remove(ele) {
		let preNode = this.findPreNode(ele)
		let curNode = this.findNode(ele)
		preNode.next = curNode.next
		curNode = null
		this.n--

	}

	isEmpty() {
		return this.n === 0
	}

	// 遍历查看链上元素
	show() {
		let headNode = this.first
		while(headNode !== null){
			console.log(headNode.item)
			headNode = headNode.next
		}
	}
}

module.exports = LinkedList