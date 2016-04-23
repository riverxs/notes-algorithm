// 数组实现表结构的情况下，插入和删除都需要线性时间的开销
// 为了避免线性时间的开销，我们可以采用链表来实现表结构，但查找没数组实现效率高
// 插入元素和删除元素都只用常数时间

// 链表是在内存中不必连续相连的结构组成
// 链表一般有: 单链表、静态链表、循环链表、双向链表

// 单链表：就是很单一的向下传递，每一个节点只记录下一个节点的信息

// 单链表实现

class LinkedList {
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

	findNode(key) {

	}
	// 插入一个节点
	insert(key, ele) {

	}

	findPreNode(key) {

	}

	// 通过元素删除
	remove(ele) {

	}

	isEmpty() {
		return this.n === 0
	}

}










