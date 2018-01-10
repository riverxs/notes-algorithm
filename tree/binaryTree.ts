// 二叉查找树：将链表插入的灵活性和有序数组查找的高效性结合的数据结构
import Comparator from '../utils/comparator'

type Comparable = string | number

class TreeNode <T> {
  // key: string | number;
  left : TreeNode<T>;
  right : TreeNode<T>;
  size: number;
  constructor(public key: Comparable, public data : T, size: number) {
    this.key = key;
    this.data = data;
    // this.parent = parent;
    this.size = size;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root : TreeNode<T>
  // _size : number
  _comparator: Comparator
  constructor() {
    this.root = null
    // this._size = 0
    this._comparator = new Comparator()
  }

  get size() : number {return this.root.size}

  // 查找key，找到则更新该值，没找到则将key和val为键值对的新节点插入到该子树中
  insertOrUpdate(node: TreeNode<T>, key: Comparable, data: T): TreeNode<T> {
    if(node === null) return new TreeNode(key, data, 1) // 插入新节点

    let cmp = this._comparator.compare(key, node.key)
    if(cmp<0) {
      node.left = this.insertOrUpdate(node.left, key, data)
    }else if(cmp > 0) {
      node.right = this.insertOrUpdate(node.right, key, data)
    }else {
      node.data = data // 更新节点
    }

    node.size = node.left.size + node.right.size + 1
    return node
  }

  put(key: Comparable, data: T): void {
    this.root = this.insertOrUpdate(this.root, key, data)
  }

  // 以node为根节点的子树中查找并返回key对应的值
  private getVal(node: TreeNode<T>, key: Comparable): T {
    if(node === null) return null
    let cmp = this._comparator.compare(node.key, key)
    if(cmp < 0) {
      return this.getVal(node.right, key)
    }else if(cmp > 0) {
      return this.getVal(node.left, key)
    }else{
      return node.data
    }
  }

  get(key): T {
    return this.getVal(this.root, key)
  } 
  succ() {}

  traverseLevel() {}
  traversePre() {}
  traverseIn() {}
  traversePost() {}
}
