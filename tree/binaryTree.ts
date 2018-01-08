class TreeNode <T> {
  left : TreeNode<T>;
  right : TreeNode<T>;
  constructor(public data : T, public parent : TreeNode<T>) {
    this.data = data;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root : TreeNode<T>
  _size : number
  constructor() {
    this.root = null
    this._size = 0
  }

  get size() : number {return this._size}

  insert(data: T, parent: TreeNode<T>) {
    if (!parent) {
      if (!this.root) {
        this.root = new TreeNode(data, null)
        this._size++
        return
    }

    const child = 
    }
  }

  succ() {}

  traverseLevel() {}
  traversePre() {}
  traverseIn() {}
  traversePost() {}
}
