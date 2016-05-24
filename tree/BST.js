// 二叉查找树(BST)ADT是一棵二叉树，其中每个结点都含有一个可比较的键key(以及与之关联的值value)且每个结点的键都大于其左子树中的任意结点的键而小于右子树的任意结点的键

// BST集链表插入的灵活性和有序数组查找的高效性(插入和查找都在O(lgN))

// 基于二叉树的符号表(又叫字典/索引/哈希)

function node(key, value, n) {
	this.key = key // 键
	this.value = value // 值
	this.left = null // 指向左子树
	this.right = null // 指向右子树
	this.n = n // 以该结点为根的树中结点总数
}

class BST {
	// 以x为根结点树的大小(结点个数)
	cosntructor() {
		this.root = null
	}
	size(x) {
		if(x===null) return 0
		else return x.n
	}

	// 以x为根节点的子树中查找并返回key对应结点的value
	get(x, key) {
		if(x === null) return null

		if(key === x.key) {
			return x.value
		}else if(key < x.key){
			return get(x.left, key)
		}else{
			return get(x.right, key)
		}
	}

	// 在以x为根节点的子树中查找key, 找到则更新它的值，否则为它创建一个新的结点并插入到该树中
	insert(x, key, value) {
		if(x === null) return new node(key, value, 1)

		if(key < x.key) x.left = insert(x.left, key, value)
		else if(key > x.key) x.right = insert(x.right, key, value)
		else x.value = value // 找到更新
		// 路径上每个结点的计数器加1
		x.n = this.size(x.left) + this.size(x.right) + 1
		return x
	}

	put(key, value) {
		this.root = this.insert(this.root, key, value)
	}

	// 有序性相关的方法

	// 查找最大key，如果根结点的右子树为空，那么最大键就是根结点，否则，就是右子树中的最大键
	max() {
		function maxNode(x) {
			if(x.right === null) return x
			return maxNode(x.right)
		}
		return maxNode(this.root).key
	}

	// 查找min key(在左子树中) 解法同上，略...

	// 向下取整
	floor(key) {
		function floorNode(x, key) {
			if(x === null) return null
			if(key === x.key) return x
			if(key < x.key) return floorNode(x.left, key)
			t = floorNode(x.right, key)
			if(t != null) return t
			else return x
		}

		temp = floorNode(root, key)
		if( root=== null) return null
		return temp.key
	}

	// 查找排名为k的键
	select(k){
		function selectNode(x, k){
			if(x==null) return null
			if(this.size(x.left) > k) return selectNode(x.left, k)
			else if(this.size(x.left) < k) return selectNode(x.right, k)
			else return x
		}
		return selectNode(this.root, k).key
	}

	// 返回给定键的排名，select的逆方法
	rank(key) {
		function rankN(key, x){
			if(x===null) return 0
			if(key < x.key) return rankN(key, x.left)
			else if(key > x.key) return 1+this.size(x.left)+rankN(key, x.right)
			else return this.size(x.left)
		}
		return rankN(key, this.root)
	}

	// 删除最小键
	deleteMin() {
		function deleteMIN(x) {
			if(x.left === null) return x.right
			x.left = deleteMIN(x.left)
			x.n = this.size(x.left) + this.size(x.right) + 1
			return x
		}
		this.root = deleteMIN(this.root)
	}
}

