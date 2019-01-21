
# ADT vs DS（data structure）

ADT:
> 数据模型 + 定义在该模型上的一组操作
> 是抽象定义，关于外部的逻辑特性，具有操作语义，不需考虑时间复杂度，不涉及具体存储形式

DS：
> 基于某种特定语言，实现ADT的一整套算法，更多的关心效率
> 具体实现相关，内部的表示与实现，有着完整的算法，多种实现，与具体的复杂度密切相关，需要考虑数据的具体存储机制


Type system:
> 更多的从抽象角度考虑问题，关心提供的操作语义而非实现细节


vector（抽象泛化概念） = array（具体语言称呼） = lineer array = 存放数据集合

> 向量是数组的抽象与泛化，由一组元素按线性次序封装而成，各元素与[0,vec.length)内的
> 秩(rank)一一对应，元素的类型不限于基本类型，操作。管理维护更加简化，统一与
> 安全，可更便捷的参与复杂的数据结构的定制实现


静态语言空间管理的不足：
1. 上溢overflow
2. 下溢underflow

向量ADT接口，接口规范，实现与使用分离
```
   v.size()
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
```