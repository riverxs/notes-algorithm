// 如何表示一个图？

// adjacency matrix: 
// incidence matrix: 

// 顶点数据类型定义
enum VStatus {UNDISCOVERED, DISCOVERD, VISITED}

class Vertex<V> {
  data: V;
  inDegree: number;
  outDegree: number;
  status: VStatus;
  dTime: number;
  fTime: number;
  parent: number;
  priority: number;
  constructor(d: V) {
    this.data = d;
    this.inDegree = 0;
    this.outDegree = 0;
    this.status = VStatus.UNDISCOVERED;
    this.dTime = -1;
    this.fTime = -1;
    this.parent = -1;
    this.priority
  }

}

// 边数据类型
enum EStatus {UNDETERMINED, TREE, CROSS, RORWARD, BACKWARD}

class Edge<E> {
  data: E;
  weight: number;
  status: EStatus;
  constructor(d: E, w: number) {
    this.data = d;
    this.weight = w;
    this.status = EStatus.UNDETERMINED;
  }
}

class Graph<V, E> {

}




