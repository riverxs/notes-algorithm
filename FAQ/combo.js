// 已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”

function combo(str){
	var msg = str.split('-')
	// var res = msg.map((x)=> {
	// 	if(x != 'get'){
	// 		return x.charAt(0).toUpperCase() + x.slice(1) 
	// 	}else{
	// 		return x
	// 	}
	// })
	// return res.join('')
	
	// for loop
	for(let i=0; i<msg.length; i++){
		if(i>0){
			msg[i] = msg[i].charAt(0).toUpperCase() + msg[i].slice(1) 
		}
	}
	return msg.join('')
}
console.log(combo("get-element-by-id")) // getElementById

