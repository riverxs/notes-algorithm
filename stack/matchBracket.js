/*  括号匹配 bracket match

 具有自相似性的问题可递归描述，但分支位置和嵌套深度不固定
 问题不断简化策略, 使用栈结构扩展性更强
 只需约定“括号”通用格式，而不必事先固定括号的类型与数目

 */

const Stack = require('./index')

/**
 * 查看exp是否完全括号格式匹配
 * 
 * @param {string} exp 
 * @param {string} m1 
 * @param {string} m2 
 * @returns {boolean}
 */

function matchBracket(exp, m1, m2) {
	let stack = new Stack() // 使用栈记录已发现但尚未匹配的左括号

	for(let i=0; i<exp.length; i++) {
		if(m1[0] === exp[i] || m2[0] === exp[i]) {
			stack.push(exp[i]) // 左括号进栈
		}else if (!stack.isEmpty() && stack.top() === ){
			stack.pop() // 栈非空，遇右括号出栈
		}else return false
	}

	return stack.isEmpty()
}
  
// test
let exp = '([])()(())'
console.log(paren(exp, '()', '[]'))

