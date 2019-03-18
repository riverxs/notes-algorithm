// 最好情况需要N-1次比较和0次交换（有序）
// 最坏情况需要N**2/2次比较和N**2/2次交换（逆序有序）
// 时间复杂度O(n**2)

// 插入排序适合那些部分有序的，小规模排序
// 数组中的每个元素距离它的最终位置都不远的排序（线性时间）

class Insertion {
	// 将数组a排好序然后返回排好序的数组
	sort(a) {
		let N = a.length
		for(let i = 1; i < N; i++){
			for(let j=i; j>0 && this.less(a[j],a[j-1]); j--){
				this.exchange(a, j, j-1)
			}
		}
		return a
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
