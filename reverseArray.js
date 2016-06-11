// 递归反转数组

function reverse(array) {
	if(array.length == 0){
		return array
	}else{
		return reverse(array.slice(1, array.length)).concat(array.slice(0,1))
	}
}
