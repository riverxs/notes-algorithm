// 操作是否修改数据结构

// 分类
// 静态： 仅读取 get search
// 动态: 需写入 insert remove

// 按存储组织方式分

// 静态: 数据空间整体创建或销毁
// 动态： 动态分配和回收物理地址空间


// 列表： 采用动态存储策略典型结构，在逻辑上构成一个线性序列


// 循秩访问无法接受O(n)

class List {
  constructor(list) {
    this.list = list
  }

  // 在节点p的n个前驱中，找到等于e的最后者
  find(e, n, p) {
    while(0 < n--) {
      if(e == this.list[--p]) return p
    }
    return null
  }

  // 
}








