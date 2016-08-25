// lexicalScope.js
(function(){
	var a=b=5 
})()

// b会成为window的property
console.log(b) //5