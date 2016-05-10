// binarySearch.js

// 数组有序find查找操作在时间复杂度在O(lgN),但插入insert操作需O(N)时间

function binarySearch(a, ele){
	let low = 0, mid, high = a.length - 1

	while(low <= high){
		mid = (low + high)/2

		if(a[mid] < ele){
			low = mid + 1
		}else if(a[mid] > ele){
			high = mid - 1
		}else{
			return mid
		}
	}
	return null
}

