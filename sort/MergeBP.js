// 自顶向下的归并排序

// 先归并那些微型数组，然后再成对归并得到的子数组

class MergeBP {
	constructor(){
		// 归并的辅助数组aux
		this.aux = []
	}

	sort(a) {
		// lgN次两两归并
		let N = a.length
		// size为子数组大小，子数组归并完成后形成的子数组状态变量size加倍
		// 开始时子数组大小为 1
		for(let size = 1; size < N; size += size){
			// index为子数组开始索引，每次每对子数组归并后后续子数组开始index加上2*size
			for(let index = 0; index < N - size; index += 2*size){
				// mid为index + size -1, 最高index为index+ 2*size -1或者N-1
				merge(a, index, index + size - 1, Math.min(index + 2*size -1, N-1))
			}
		}
		return a
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

