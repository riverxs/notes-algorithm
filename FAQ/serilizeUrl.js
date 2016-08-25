// 有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，
// 请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，
// 将其按key-value形式返回到一个json结构中，
// 如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。

function serilizeURL(sURl){
	let res = {}
	let queryParams = ''
	if(sURl.indexOf('?') != -1){
		queryParams = sURl.slice(sURl.indexOf('?')+1)
	}else{
		return null
	}
	let arr = queryParams.split('&')
	arr.map((x) => {
		if(x.indexOf('=') != -1){
			res[x.split('=')[0]] = x.split('=')[1]
		}else{
			let n = x.slice(0)
			res[n] = "undefined"
		}
	})
	return JSON.stringify(res)
}

var surl = "http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e"
console.log(serilizeURL(surl))

function serilizeUrl(url) {
    var result = {};
    url = url.split("?")[1];
    var map = url.split("&");
    for(var i = 0, len = map.length; i < len; i++) {
        result[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    return result;
}

var surl = "http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e"
console.log(serilizeURL(surl))