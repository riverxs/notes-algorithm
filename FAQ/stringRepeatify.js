// stringRepeatify.js

// 给字符串对象添加该方法

// (a)==>(aaaxxx)

String.prototype.repeatify = function (n){
	// 迭代写法
	// let str = ''
	// for(let i=0; i<n; i++){
	// 	str += this
	// }
	// return str
	// 递归
	if(n<=0) return ''
	return this + this.repeatify(n-1)
}

let aaa= 'abc'
aaa.repeatify(3) //"abcabcabc"

