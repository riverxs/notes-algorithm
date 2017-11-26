// 将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成10，{$name}替换成Tony （使用正则表达式）

let str = "<tr><td>{$id}</td><td>{$name}</td></tr>" // str为不可变数据

let res = str.replace(/{\$id}/g,'10').replace(/{\$name}/g,'Tony')

console.log(res) // <tr><td>10</td><td>Tony</td></tr>
