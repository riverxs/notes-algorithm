// 缓冲应用
// 中缀表达式求值
const Stack = require('./index')


// 定义优先级二维表
const orderMatrix = [
  [],
  [],
  [],
]


function evaluate(exp) {
  let operateStack = new Stack()
  let numberStack = new Stack()
  // let atom = exp[0]
  let i = 0

  operateStack.push('\0')
  while(!operateStack.isEmpty()) { // 逐个处理各字符，直至运算符栈空
    let curr = exp[i]
    let op = null

    if(isDigit(curr)) {
      readDigit(curr, numberStack) //读入操作数
    }else{
      // 读入操作符
      switch(orderBetween(operateStack.top(), curr)){
        case '<':
          operateStack.push(curr)
          break
        case '=':
          operateStack.pop()
          i++
          break
        case '>':
          op = operateStack.pop() // 栈顶运算符出栈，执行对应的运算
          if ('!' == op) {
            numberStack.push(caculate(op, numberStack.pop())) // 一元运算
          }else{
            // 二元运算
            let number1 = numberStack.pop()
            let number2 = numberStack.pop()
            numberStack.push(caculate(op, number1, number2))
          }
          break
      }
    }
  }

}


function orderBetween(top, curr) {

}


function isDigit(digit) {
  return typeof digit === 'number' 
}


function caculate() {
  
}

