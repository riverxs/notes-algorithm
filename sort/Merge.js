// 归并排序，这是一种递归排序算法，将两个有序的数组归并成一个更大的有序数组
// 先递归的将数组分成两半分别排序，然后将结果归并起来，这是一种分治的思想
// 时间复杂度O(NlogN),但需额外空间和N成正比

class Merge {
	constructor(){
		// 归并的辅助数组aux
		this.aux = []
	}

	sort(a) {
		this.msort(a, 0, a.length -1)
		return a
	}

	msort(a, low, high) {
		if(high <= low) return
		let mid = low + parseInt((high - low)/2)
		// 左半边有序
		this.msort(a, low, mid)
		// 右半边有序
		this.msort(a, mid+1, high)
		// 将排好序的部分归并
		this.merge(a, low, mid, high)
	}
	// 归并方法：原地归并
	merge(a, low, mid, high) {
		// 将a[low...mid]和a[mid+1...high]归并
		let i = low, j = mid + 1
		// 将a复制到辅助数组aux
		for(let k = low; k <= high; k++){	
			this.aux[k] = a[k]
		}
		for(let k = low; k <= high; k++){
			// 左半边已用完，将右半边的元素aux[j]作为排序的数组的元素a[k]
			if(i > mid){
				a[k] = this.aux[j++]
			}
			// 右半边已用完，将左半边的元素aux[i]作为排序的数组的元素a[k]
			else if(j > high){
				a[k] = this.aux[i++]
			}
			// 如果右半边的元素小于左半边的元素，那么将右半边元素aux[j]作为a[k]
			else if(this.less(this.aux[j], this.aux[i])){
				a[k] = this.aux[j++]
			}
			else a[k] = this.aux[i++]
		}
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