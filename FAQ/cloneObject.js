// 1.实现一个函数clone，可以对JavaScript中的5种主要的数据类型
// （包括Number、String、Object、Array、Boolean）进行值复制

function clone(origin) {
	// if origin type is Number,String,Boolean
	// if(typeof origin == 'number' || typeof origin == 'string' || typeof origin == 'boolean'){
	// 	return origin
	// }
	if(typeof origin != 'object'){
		return origin
	}
	// 	direct return origin 
	// if origin type is object or Array
	let res = Array.isArray(origin) ? [] : {}
	if(typeof origin === 'object'){
		for(let e in origin){
			res[e] = typeof origin[e] === 'object' ? clone(origin[e]) : origin[e] 
		}
		// return res
	}
	return res
	// 	check his sub elements
	// 	if his sub element is baseType
	// 		copy it to another container
	// 	else element is complexied type
	// 		judge it is Object or Array
	// 		recursively clone it to it's container'			
}
let o = [1,2,3,{a:'1',b:[1,2,3]},[4,5,6]]
console.log(clone(o))
let n = 'abc'
console.log(clone(n))


// 方法一：
Object.prototype.clone = function(){
        var o = this.constructor === Array ? [] : {};
        for(var e in this){
            o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
        }
        return o;
}
let o = [1,2,3,{a:'1',b:[1,2,3]},[4,5,6]]
console.log(o.clone())
 
//方法二：
/**
 * 克隆一个对象
 * @param Obj
 * @returns
 */ 
function clone(Obj) {   
    var buf;   
    if (Obj instanceof Array) {   
        buf = [];                    //创建一个空的数组 
        var i = Obj.length;   
        while (i--) {   
            buf[i] = clone(Obj[i]);   
        }   
        return buf;    
    }else if (Obj instanceof Object){   
        buf = {};                   //创建一个空对象 
        for (var k in Obj) {           //为这个对象添加新的属性 
            buf[k] = clone(Obj[k]);   
        }   
        return buf;   
    }else{                         //普通变量直接赋值
        return Obj;   
    }   
}