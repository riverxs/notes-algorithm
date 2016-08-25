// 数组去重
function deleteRepetition(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = i+1; j < arr.length; ){
			// NaN is special!!! NaN !== NaN
			if (isNaN(arr[i])&&typeof arr[i] === 'number'){
				if(isNaN(arr[j])&&typeof arr[j] === 'number'){
					arr.splice(j,1)
				}else{
					j+=1
				}

			}else{
				if(arr[i] === arr[j]){
					arr.splice(j, 1)
				}else{
					j += 1
				}
			}

		}
	}
	return arr
}
var arr = [1,2,3,1,2,1,3,4,5,5]
console.log(deleteRepetition(arr))
var test1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN] 
//[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
console.log(deleteRepetition(test1)) 
//[false, true, undefined, null, NaN, 0, 1, Object {...}, Object {...}, "a", NaN]

// recursion style
Array.prototype.uniq = function() {
	function helper(plus, sub) {
		if(sub.length === 0) return plus
		else{
			let p = plus.concat(sub[0])
			let s = sub.filter((x) => {
				if(isNaN(sub[0])&&typeof sub[0] === 'number'){
					return !(isNaN(x)&&typeof x === 'number')
				}else{
					return sub[0] !== x
				}
			})
			return helper(p, s)
		}
	}
	return helper([], this)
}
var test1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN] 
console.log(test1.uniq()) // [false, true, undefined, null, NaN, 0, 1, Object {...}, Object {...}, "a"]

var test2 = [1,2,3,1,2,1,3,4,5,5]
console.log(test2.uniq()) //[1, 2, 3, 4, 5]

// scheme three
Array.prototype.uniq = function () {
   var resArr = [];
   var flag = true;
     
   for(var i=0;i<this.length;i++){
       if(resArr.indexOf(this[i]) == -1){ // {} !== {}
           if(this[i] != this[i]){   //排除 NaN
              if(flag){
                   resArr.push(this[i]);
                   flag = false;
              }
           }else{
                resArr.push(this[i]);
           }
       }
   }
    return resArr;
}
var test1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN] 
console.log(test1.uniq()) 