/* 
动机：解决线性结构无法很好解决的一些问题
按照层次关系组织一系列数据的方式
图的一种特例



定义：一棵树是一些节点的集合，这个集合可以为空，若非空，则一棵树由root节点以及0个或多个非空的子树T1，T2，... , Tk组成，这些子树中的每一棵的根都被来自根root的一条有向的边所连接

每条边edge都将某个节点Node连接到它的父节点parentNode
每个节点Node都有一个parentNode, 除了root节点
子树subTree 是不相交的
N 个节点的树有 N-1条边

树的一些概念术语

leaf: 没有子节点的节点
degree: 节点的度，节点的子树个数
treeDegree: 树的所有节点中最大的度数
节点关系：parentNode，childNode, siblingNode, grandparentNode, grandchildNode, ancesterNode, descentantNode, firstChild, nextSibling
depth: 对于任意节点Ni, Ni的深度depth为从根到Ni的唯一路径的长。一个树的深度等于它的最深的树叶的深度，该深度总是等于这棵树的高height
如果存在从N1到N2的一条路径path，那么N1是N2的一位祖先ancestor而N2是N1的一个后裔descendant，如果N1 != N2，那么那么N1是N2的一位真祖先proper ancestor而N2是N1的一个真后裔proper descendant

有序树
树的特点：路径+环路区别

π = {(v0,v1), (v1,v2), .... , (vk-1, vk)}构成一条path

路径长度 ： |π| = k

环路(cycle/loop) vk = v0

节点之间均有路径，称作连通图(connected)

不含环路，称作无环图(acyclic)

树：无环联通图、极小连通图、极大无环图
故： 任一节点v与根节点之间存在唯一路径
*/

// 树的定义
let Node = {
	element,
	firstChild,
	nextSibling,
	parent

}

// 树抽象数据类型接口
/* root()
parent()
firstChild()
nextSibling()
insert(i,e)
remove(i)
traverse()
 */

// 长子 + 兄弟 表示法，每个节点有两个引用


