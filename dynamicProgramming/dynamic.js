// make it work
// make it right
// make it fast

// Fibnacia
// F(n) = F(n-1) + F（n-2)

function fib(n) {
    if(n<=1) return n
    return fib(n-1) + fib(n-2)
}

// T(n) = T(n-1) + T(n-2) +1 
// O(2^n),低效的根源在于递归实例大量的重复计算

// 封底估计

// 改进
// 1. 记忆化，memoization
// 将计算实例的结果缓存

// 2. 迭代，动态规划
function fib2(n){
    function iter(cur, next, n){
        if(n==0) return next
        return iter(next - cur, next + cur, n-1)
    }
    return iter(0,1,n)
}

console.log(fib2(7))

function loop(lo){
    if(lo == -1) return
    console.log(fib(lo))
    return loop(lo-1)
}

// console.log(loop(7))

loop(7)


