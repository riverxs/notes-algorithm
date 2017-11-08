// 缓冲应用
// 中缀表达式求值
const Stack = require('./index')

function evaluate(exp) {
  let operateStack = new Stack()
  let numberStack = new Stack()
  // let atom = exp[0]
  let i = 0

  operateStack.push('\0')
  while(!operateStack.isEmpty()) { // 逐个处理各字符，直至运算符栈空
    let curr = exp[i]

    if(isDigit(curr)) {
      readDigit(curr, numberStack) //读入操作数
    }else{
      // 读入操作符
      switch(orderBetween(operateStack.top(), curr)){
        case '<':
          operateStack.push(curr)
          break
        case '>':
          
      }
    }
  }

}


function orderBetween(top, curr) {

}
