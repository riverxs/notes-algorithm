// 特点：正如其名——快速排序，适用各种不同输入，原地排序，只需很小的辅助栈，内循环短小，意味着无论理论还是实际都会更快。快排的解法也是典型的分治思想
// 时间复杂度：O(N*logN)
// 缺点：脆弱，实现要小心以避免低下的性能

class Quick {
	sort(a) {
		this.qsort(a, 0, a.length - 1)
		return a
	}

	qsort(a, low, high){
		if(high <= low) return
		// 切分点
		let j = this.partition(a, low, high)
		// 将左半部分排序
		this.qsort(a, low, j-1)
		// 将右半部分排序
		this.qsort(a, j+1, high)
	}

	partition(a, low, high) {
		let i = low, j = high + 1
		// 切分元素
		let p = a[low]
		while(true){
			// 依次检查左边是否有大于切分元素p的数a[i],有则退出循环
			do{++i} while(this.less(a[i], p))
			// 依次检查右边是否有小于切分元素p的数a[j],有则退出循环
			do{--j} while(this.less(p, a[j]))
			// 当左右扫描指针相遇时退出循环
			if(i >= j) break
			// 将左边大于p的数a[i]和右边小于p的数a[j]交换位置，然后继续依次扫描左右
			this.exchange(a, i, j)
		}
		// 将p和左子数组最右的a[j]交换
		this.exchange(a, low, j)
		return j
	}

	// 判断v是否比w小，是则返回true，否则返回false
	less(v,w){
		if(typeof v === typeof w){
			return v < w
		}else{
			throw new Error("TypeError")
		}
	}
	// 交换a[i]和a[j]的内容
	exchange(a, i, j){
		let temp = a[i]
		a[i] = a[j]
		a[j] = temp
	}
	//判断是否为升序
	isSorted(a){
		for(let i=1; i<a.length; i++){
			if(this.less(a[i], a[i-1])) return false
		}
		return true
	}
}