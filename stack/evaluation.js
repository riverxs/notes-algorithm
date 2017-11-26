// 缓冲应用
// 中缀表达式求值
const Stack = require('./index')


// 定义优先级二维表，[栈顶][当前]运算符表
// + - * / ^ ! ( ) \0
const orderMatrix = [
  ['>', '>', '<', '<', '<', '<', '<', '>', '>'],
  ['>', '>', '<', '<', '<', '<', '<', '>', '>'],
  ['>', '>', '>', '>', '<', '<', '<', '>', '>'],
  ['>', '>', '>', '>', '<', '<', '<', '>', '>'],
  ['>', '>', '>', '>', '>', '<', '<', '>', '>'],
  ['>', '>', '>', '>', '>', '<', ' ', '>', '>'],
  ['<', '<', '<', '<', '<', '<', '<', '=', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['<', '<', '<', '<', '<', '<', '<', ' ', '=']  
]

const opsList = ['+', '-', '*', '/', '^', '!', '(', ')', '\0']

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
            let number2 = numberStack.pop()
            let number1 = numberStack.pop()
            numberStack.push(caculate(op, number1, number2))
          }
          break
      }
    }
  }

  return numberStack.pop()

}

function readDigit(cur, stack) {
  stack.push(curr)
}

function orderBetween(top, curr) {
  let topIndex = opsList.indexOf(top)
  let currIndex = opsList.indexOf(curr)

  return orderMatrix[topIndex][currIndex]
}


function isDigit(digit) {
  return typeof digit === 'number' 
}


function caculate(op, num1, num2) {
  if(num2) {
    // return num1 op num2
    switch(op) {
      case '+':
        return num1 + num2 
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/': 
        return num1 / num2
      case '^':
        return num1**num2
    }
  }else{
    return factorial(num1)
  }
}

function factorial(num) {
  if(num == 1) return 1
  else return n * factorial(n-1)
}


module.exports = {
  caculate,
  isDigit,
}