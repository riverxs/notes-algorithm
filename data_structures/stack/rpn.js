// 逆波兰表达式 reverse polish notation
// 不使用括号，即可表示带优先级的运算关系
const Stack = require('./index')
const Eval = require('./evaluation')

// 逆波兰计算法
function rpnEvaluation(rpnExp) {
  let numStack = new Stack()
  let optStack = new Stack()
  let i = 0
  // if()
  while(rpnExp[i]) {
    if (isDigit(rpnExp[i])) {
      numStack.push(rpnExp[i++])
    }else{
      // 一元操作符
      let opt = rpnExp[i++]
      if(isSignal(opt)){
        let num = numStack.pop()
        let res = Eval.caculate(opt, num)
        numStack.push(res)
      }else{
        let num2 = numStack.pop()
        let num1 = numStack.pop()
        let res = Eval.caculate(opt, num1, num2)
        numStack.push(res)
      }
    }
  }

  return numStack.pop()
}

// 常规带括号表达式转换成逆波兰表达式
function converExp(exp) {
  
}

