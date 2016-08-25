// 递归反转数组

function reverse(array) {
	if(array.length == 0){
		return array
	}else{
		return reverse(array.slice(1, array.length)).concat(array.slice(0,1))
	}
}
reverse([1,2,3,4,5])
