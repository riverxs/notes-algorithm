const Stack = require('./index')


/**
 * 十进制转换成其他进制
 * 
 * @class Convert
 */
class Convert {

	static convert(from, to) {
		let _elements = new Stack()
		let _res = []
		let digit = ['0','1','2','3','4','5','6','7','8','9'] // 根据to设定
		let codePointA = 'A'.codePointAt(0)

		let diff = to - 10

		if(diff > 23) {
			throw new Error('beyond the alphabeta range!')
		}
		while(diff > 0) {
			digit.push(String.fromCharCode(codePointA++))
			diff--
		}

		while(from !== 0) {
			let remainder = from%to

			_elements.push(digit[remainder]) // 取余
			from = Math.floor(from/to)  // 取整
		} 

		while(!_elements.isEmpty()) {
			_res.push(_elements.pop())
		}

		return _res.join('')
	} 	
}

// export default Convert
module.exports = Convert