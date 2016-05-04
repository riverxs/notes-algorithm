// 希尔排序，插入排序的改进
// 交换不相邻的元素以对数组的局部进行排序，并最终用插入排序将局部有序的数组排序
// 因为插入排序适合那些部分有序的



class Shell {
	// 将数组a排好序然后返回排好序的数组
	sort(a) {
		let N = a.length
		let h = 1
		while(h < N/3){
			h = 3*h + 1
		}
		while(h >= 1){
			// 将数组变为相隔h个元素有序
			for( let i = h; i < N; i++){
				for(let j = i; j >= h && this.less(a[j], a[j-h]); j -= h){
					this.exchange(a, j, j-h)
				}
			}
			// 缩小间隔
			h = parseInt(h/3)
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



