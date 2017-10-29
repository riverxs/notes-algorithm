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
 * @param {string} b1 
 * @param {string} b2 
 * @returns {boolean}
 */

function matchBracket(exp, b1, b2) {
	let stack = new Stack() // 使用栈记录已发现但尚未匹配的左括号

	for(let i=0; i<exp.length; i++) {
		if(b1[0] === exp[i] || b2[0] === exp[i]) {
			stack.push(exp[i]) // 左括号进栈
		}else if (!stack.isEmpty()){
			let top = stack.top()
			if(top === b1[0]) {
				if(exp[i] === b1[1]) {
					// 栈非空，遇右括号出栈
					stack.pop() 
				}else{
					return false
				}
			}else{
				if(exp[i] === b2[1]) {
					// 栈非空，遇右括号出栈
					stack.pop() 
				}else{
					return false
				}
			}
		}else return false
	}

	return stack.isEmpty()
}
  
module.exports = matchBracket
