// 二叉查找树：将链表插入的灵活性和有序数组查找的高效性结合的数据结构
import Comparator from '../utils/comparator'

class TreeNode <T> {
  // key: string | number;
  left : TreeNode<T>;
  right : TreeNode<T>;
  constructor(public key: number | string, public data : T, public parent : TreeNode<T>) {
    this.key = key;
    this.data = data;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root : TreeNode<T>
  _size : number
  _comparator: Comparator
  constructor() {
    this.root = null
    this._size = 0
    this._comparator = new Comparator()
  }

  get size() : number {return this._size}

  insert(data: T, parent: TreeNode<T>) {
    if (!parent) {
      if (!this.root) {
        this.root = new TreeNode(data, null)
        this._size++
        return
      }

      const child = this._comparator.lessThan(data, parent.data) ? 'left' : 'right'

      if(parent[child]) {
        this.insert(data, parent[child])
      }else {
        parent[child] = new TreeNode(data, parent)
        this._size++
      }
    }
  }

  // 以node为根节点的子树中查找并返回key对应的值
  getVal(node: TreeNode<T>, key: string | number): T {
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
