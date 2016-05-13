// 二叉树：递归定义，一个有穷的节点集合
/*这个集合可能为空，若不为空，则它是由根节点和称为其左子树Tl和右子树Tr的两个不相交的二叉树组成*/

// 二叉树有左右顺序之分

// 特殊二叉树有如下几个
// 1. 斜二叉树（Skewed Binary Tree）
// 2. 完全二叉树（Complete Binary Tree）
// 3. 满二叉树 （Full Binary Tree）

// 二叉树重要性质： 
/* 1. 一个二叉树第i层的最大节点数为2**(i-1) i>=1
   2. 深度为K的二叉树有最大节点总数为2**k - 1, k>=1
   3. 对于任何非空二叉树T，若n0表示叶节点的个数、n2是度为2的非叶节点个数，那么两者满足关系n0 = n2 + 1 */

// 常见遍历方法
/* 1. 先序：根、左子树、右子树
   2. 后序：左、右、根
   3. 中序：在、根、右
   4. 层次：从上到下，从左到右*/

// 先序：访问根节点，先序遍历其左子树，先序遍历其右子树

function preOrderTraversal(BT){
	if(BT){
		console.log(BT.data)
		preOrderTraversal(BT.left)
		preOrderTraversal(BT.right)
	}else{
		return
	}
}

// 其他递归遍历类似

// 层次遍历，队列实现

function levelOrderTraversal(BT) {
	var Q = []
	if(!BT) return // 空树返回
	Q.push(BT)
	while(Q.length!== 0) {
		tree = Q.shift()
		console.log(tree.data)
		if(tree.left) {
			Q.push(tree.left)
		}
		if(tree.right){
			Q.push(tree.right)
		}
	}

}


// 二叉树的存储结构
/* 1. 顺序存储结构，数组存储，一般二叉树会空间浪费
   2. 链表存储, */

// C描述定义
// typedef struct treeNode *BT;
// struct treeNode {
// 	elememtType data;
// 	BT left;
// 	BT right;
// }