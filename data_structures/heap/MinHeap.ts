import Heap from './Heap'

/**
 * PQ: 一种高效的实现删除最值和插入元素的ADT, O(logn)
 * 这种数据结构常用于任务调度，根据键值的优先级来决定任务的优先级
 * 其他应用场景：模拟系统，粒子碰撞模拟，堆排序，图搜索，数据压缩等....
 * 优先队列可用数组(有序或无序)或链表(有序或无序)实现，但是插元素和删除最大元素这两个操作之一在最坏情况下需要线性时间来完成
 * 本例以二叉树(底层数组存储)实现最大堆，插入删除时间复杂度在O(lgN)
 * @export
 * @class MinHeap
 * @extends {Heap<V>}
 * @template V
 */
export default class MinHeap<V> extends Heap<V> {

	/**
	 * @description 检查最大堆的元素是否顺序正确
	 * 最小堆：第一个元素需小于等于第二个比较的元素
	 * @param {V} firstElement
	 * @param {V} secondElement
	 * @returns
	 * @memberof MinHeap
	 */
	pairIsInCorrectOrder(firstElement: V, secondElement: V) {
		return this.compare.lessThanOrEqual(firstElement, secondElement)
	}
}