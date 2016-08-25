// 用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。

function sortRamdomNum(min, max, len){
	var arr = []
	for(let i=0; i<len; i++){
		arr[i] = min + Math.floor(Math.random()*(max-min))
	}
	return arr.sort()
}
console.log(sortRamdomNum(10,100,10))
