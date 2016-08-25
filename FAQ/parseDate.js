// 输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26

var d = new Date()
var year = d.getFullYear()
var month = d.getMonth()
var day =d.getDate()

month = month < 10 ? '0' + (month + 1) : month

day = day < 10 ? '0' + day : day

console.log(year + '-' + month + '-' + day) // 2016-08-24