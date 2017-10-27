const Stack = require('./index')


/**
 * 十进制转换成其他进制
 * 
 * @class Convert
 */
class Convert {
	constructor() {
		this._elements = new Stack()
		this.res = []
	}

	convert(from, to) {
		let digit = ['0','1','2','3','4','5','6','7','8','9'] // 根据to设定
		let codePointA = 'A'.codePointAt(0)

		let diff = to - 10

		if(diff > 23) {
			throw new Error('beyond the alphabeta range')
		}
		while(diff > 0) {
			digit.push(String.fromCharCode(codePointA++))
			diff--
		}

		while(from !== 0) {
			this._elements.push(from%to) // 取余
			from = Math.floor(from/to)  // 取整
		} 

		while(!this._elements.isEmpty()) {
			this.res.push(this._elements.pop())
		}

		return this.res.join('')
	} 	
}

// export default Convert
module.exports = Convert