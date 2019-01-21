String.prototype.trim = String.prototype.trim || function(){
	return this.replace(/^\s+/, '').replace(/\s+$/, '')
}
let spaceStr = '\t\n  abcd efgh    '
console.log(spaceStr.trim() == 'abcd efgh') //true