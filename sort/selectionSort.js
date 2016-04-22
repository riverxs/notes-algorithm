// 对于长度为N的数组，选择排序需要大约(N**2)/2次比较和N次交换
// 时间复杂度为O(N**2)
//特点： 1.运行时间和输入无关，2.数据的移动是最少的，N次交换
	 
class SelectionSort{
	// 升序排列
	sort(a){
		let N = a.length
		for(let i = 0; i < N; i++){
			// 最小元素的索引
			let min = i
			// 从剩余数组元素中找到最小元素
			for(let j = i + 1; j < N; j++){
				if(this.less(a[j], a[min])) min = j
			}
			this.exchange(a, i, min)
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
	// 打印排好序的数据
	show(a){
		for(let v of a){
			console.log(v + '\n')
		}
	}
	//判断是否为升序
	isSorted(a){
		for(let i=1; i<a.length; i++){
			if(this.less(a[i], a[i-1])) return false
		}
		return true
	}
}