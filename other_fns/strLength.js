function strLength(s, bUnicode255For1) {
    if(bUnicode255For1){
    	return s.length
    }else{
    	let resultLength = 0
    	for(let i=0; i< s.length; i++){
    		if(s.charCodeAt(i)>255){
    			resultLength += 2
    		}else{
    			resultLength += 1
    		}
    	}
    	
    	return resultLength
    }
}

let testStr1 = 'abcd早上好'
console.log(strLength(testStr1, true))
console.log(strLength(testStr1, false))

let testStr2 = 'hello world, 牛客'
console.log(strLength(testStr2, true))
console.log(strLength(testStr2, false))
