// sequence(vector,list)

// ADT vs DS（data structure）

// ADT: 数据模型 + 定义在该模型上的一组操作
// 是抽象定义，关于外部的逻辑特性，具有操作语义，不需考虑时间复杂度，不涉及具体存储形式

// DS： 基于某种特定语言，实现ADT的一整套算法，更多的关心效率
// 具体实现相关，内部的表示与实现，完整的算法，多种实现，与具体的复杂度密切相关，需要考虑数据的具体存储机制


// Type system: 更多的从抽象角度考虑问题，关心提供的操作语义而非实现细节


// vector（抽象泛化概念） = array（具体语言称呼） = lineer array = 存放数据集合

/*向量是数组的抽象与泛化，由一组元素按线性次序封装而成，各元素与【0,0）内的
秩(rank)一一对应，元素的类型不限于基本类型，操作。管理维护更加简化，统一与
安全，可更便捷的参与复杂的数据结构的定制实现
*/

// 静态空间管理胡不足：
// 1. 上溢overflow
// 2. 下溢underflow

// 向量ADT接口

// 接口规范，实现与使用分离
/*v.size()
v.get(rank)
put(rank, value)
insert(rank, value)
remove(r)
disordered()
sort()
find(value)
search(value)
deduplicate()
unnniquify()
traverse()
*/

// 无序向量
class Vec {
  constructor(...n) {
    // super()
    this.eles =  new Array(...n)
    // return this
  }

  // 输入敏感算法，最好O(1),最坏O(n)
  find(el, lo) {
    // let lo = 0,
    let  hi = this.eles.length

    while (lo < hi) {
      if (el === this.eles[lo]) return lo
      lo++
    }

    return -1 // 无效
  }

  // 去重, 返回去重后的vec
  deduplicate() {
    let i = 0
    
    // 有效率问题 
    while (i < this.eles.length) {
      
      let two = this.find(this.eles[i], i+1) 
      two < 0 ? i++ : this.remove(two)
    }
    return this
  }

  // 有序向量的去重
  uniquify(){
    let temp = []
    for(let i= 0; i<this.eles.length; i++) {
      if(this.eles[i] == this.eles[i+1]) {
        //
      }else{
        temp.push(this.eles[i])
      }
    }

    return temp

  }


  remove(num) {
    this.eles = this.eles.filter((ele, index)=>{
      if(index === num) return false
      else return true
    })
    return this
  }

  // 遍历操作
  traverse(fn){
    for(let i=0; i<this.eles.length; i++) {
      this.eles[i] = fn(this.eles[i])
    }
    return this
  }

  // 判断有序?返回升序1，降序-1， 无序0，矢量中具有相等元素
  // 矢量长度len,最多做len-1次比较
  // 问题定义，理解
  // 解法假设，建模
  // 实现
  // 求证反馈，修正

  disordered(){
    let n = 0
    let m = 0
    let len = this.eles.length

    for(let i=1; i<len; i++){
      if(this.eles[i] - this.eles[i-1] >= 0 ) {
        n++
      }

      if(this.eles[i] - this.eles[i-1] <= 0 ) {
        m++
      }

    }

    if(n == len -1){
      return 1
    }else if(m == len - 1){
      return -1
    }else{
      return 0
    }
  }

  // version2
  // 假设升序
  disordered2() {
    let n = 0
    let len = this.eles.length
    for(let i = 1; i< len; i++){
      if(this.eles[i-1] > this.eles[i]) n++
    }
    // 返回0: 升序，返回0<n<len-1: 乱序，n=len-1：逆序 （无重复元素）
    return n
  }

  // 有序向量二分查找
  // 语义约定：
  /*   应该便于有序向量自身的维护：vec.insert(1+vec.search(e),e)
    即使失败，也应该给出新元素适当的插入位置
    若允许重复元素，则每一组也需按其插入的次序排列

    约定： 在有序向量区间V[lo, hi),确定不大于e的最后一个元素的秩
      若 -** <e < V[lo], 返回lo - 1
      若 V[hi -1] < e < +**, 返回 hi - 1
  */
  
  // 递归深度O(logn)
  search(e, lo, hi) {
    // 如何处置特殊情况
    // 目标元素不存在？存在多个目标元素？

    // return (Math.random() > 0.5) ? 
    //     binSearch(e, lo, hi)
    //   : fibSearch(e, lo, hi)

    // 二分,减而治之
    let that = this
    function binSearch(e, lo, hi) {
      let mid = parseInt((lo+hi)/2)
      let midVal = that.eles[mid] 
      if(midVal == e) return mid
      else if(e > midVal){
        if(e > that.eles[hi]) return -1
        else{
          return binSearch(e, lo+1, hi)          
        }
      }else{
        if(e < that.eles[lo]) return -1
        return binSearch(e, lo, hi-1)
      }
    }

    // 改进，每次迭代（递归实例）仅做一次关键比较
    // 所有分支只有2个分支，平衡分支比较
    // 整体性能更加稳定

    binSearch_2(e, lo, hi) {
      while( hi -lo >1) { // 
        let mid = (lo + hi) >> 1
        (e < this.eles[mid]) ? hi = mid : lo = mid
      } // 出口时hi = lo +1, 查找区间仅仅含有一个元素this.eles[lo]
      return (e == this.eles[lo]) ? lo : -1
    }

    // 语义实现,最终版本
    binSearch_3(e, lo, hi){
      while(lo < hi) {
        let mid = (lo + hi) >> 1
        (e < this.eles[mid]) ? hi = mid : lo = mid + 1
      }
      return --lo
    }

    // 观察，构思，建模
    // 实现
    // 验证
    // 通过递归深度的不均衡，对转向成本的不均衡进行补偿
    // 如：n = fib(k) -1 则可取mi = fib(k-1) - 1
    // 于是前后向量长度分别为fib(k-1) - 1, fib(k-2) - 1
    // 
    function fibSearch(e, lo, hi) {
      let fib = new Fib(hi-lo) // 生成fib数列
      while(lo < hi) {
        while(hi - lo < fib.get()) fib.prev() //？？
        
        mi = lo + fib.get() - 1 // 黄金切分点
        if(e < this.eles[mi]) hi = mi
        else if(this.eles[mi] < e) lo = mi + 1
        else return mi
      }
      return -1 // 失败
    }

    // 通用策略: 对于任何的A[0,n),总是选取A[xn]作为轴点


    // return binSearch(e, lo, hi)
  }


  // 插值查找O（logn），均匀且独立的随机分布
  // 元素按照线性趋势增长，猜测轴点加快收敛速度

  // 排序
  // 冒泡
  // ？
  bubbleSort() {
    while(!bubble(lo,hi--)){} // 逐趟扫描交换，直至全序
    function bubble(lo, hi) {
      let sorted = true // 整体有序标志
      while(++lo < hi) { // 逐一检查各对相邻元素
        if(this.eles[lo-1] > this.eles[lo]){
          sorted = false // 表示做过交换
          swap(this.eles[lo-1], this.eles[lo])
        }
      }

      return sorted
    }
  }

  bubbleSort02() {
    while(lo <(hi = bubble(lo, hi))){}
    function bubble(lo, hi) {
      let last = lo
      while(++lo < hi) {
        if(this.eles[lo-1] > this.eles[lo]){
          last = lo
          swap(this.eles[lo-1], this.eles[lo])          
        }
      }

      return last
    }
  }

}
// 知其所以然，training

let vec = new Vec(1,2,3,3,3,3,4,4,4,5,5)
let vec1 = new Vec(5,4,4,3,2,1)
let vec2 = new Vec(1,2,3,4,5,6,7)

// 遍历操作
console.log(vec.traverse(x=>x*x))
// 无序向量

// 读写，操作符重写【】，便捷访问

// 区间删除

// 单元素删除

// 查找,输入敏感算法




// 有序向量




