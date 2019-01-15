// 对于序列A[0,n] 和B[0,m],LCS(longest common subsequence)
// 无非三种情况

// 0） 若n=-1或m=-1,则取空序列“”    递归基
// 1） 若A[n] = 'X' = B[m],则取作LCS(A[0,n), B[0,m)) + 'X'  减而治之
// 2) 若A[n] /= B[m] 则在LCS(A[0,n],B[0,m))与LCS(A[0,n),B[0,m])中取更长者  分而治之


function maxCommonSeq(listA, listB) {
    if(listA.length == -1 || listB.length == -1){ return ""}
    else if(listA[listA.length] == listB[listB.length]){
        return maxCommonSeq(listA.slice(0,-1), listB.slice(0,-1)) + listA.slice(-1)
    }else{
        if(listB.slice(-1)){ // ? 如何判断对另一个list无效？
            return maxCommonSeq(listA, listB.slice(0,-1))            
        }else{
            return maxCommonSeq(listA.slice(0,-1), listB)
        }
    }
}


// 递归单调性，原问题的规模必可减少

// O（2^n）

// 递归往往能设计出可行且正确的解，但要提高效率需要迭代计算，动态规划来消除重复计算，提高效率
// 使用动态规划解决上面效率低下的问题

