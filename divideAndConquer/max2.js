// 从数组区间A【lo,hi)中找出最大的两个整数A[x1]和A[x2]，要求比较的
// 次数尽可能的少

// 迭代算法，分而治之
function max2(list){
    let lo = 0, hi = list.length
    let x1 = 0
    // 扫描list，找出max
    for(i=lo+1; i<hi; i++){
        if(list[x1] < list[i]) x1=i
    }
    // 扫描list[lo,x1],找出最大
    let x2 = 0
    for(i=lo+1; i<x1; i++){
        if(list[x2] < list[i]) x2=i
    }
    let max2 = list[x2]
    // 扫描list[x1,hi]找出max
    // x2 = x1+1
    for( i=x1+1, x2 = i; i<hi; i++){
        if(list[x2] < list[i]) x2=i
        if(list[x2] > max2) max2 = list[x2]
    }

}

// 递归，分而治之，算法改进

function max2(list, lo, hi, x1, x2){
    if(lo + 2 == hi) {
        // T(2) = 1
    }
    if(lo + 3 == hi){

    } // T(3) = 3

    let mi = (lo + hi) / 2 // divide

    let x1L, x2L
    max2(list, lo, mi, x1L, x2L)
    let x1R, x2R
    max2(list, mi, hi, x1L, x2R)

    if(list[x1L] > list[x1R]){
        x1 = x1L
        x2 = (list[x2L] > list[x1R]) ? x2L : x1R
    }else{
        x1 = x1R
        x2 = (list[x1L] > list[x2R]) ? x1L : x2R 
    }
}






