// 二叉树抽象数据类型

// interface BinNode<T> {
//     parent: BinNode<T>;
//     left: BinNode<T>;
//     right: BinNode<T>;

//     data: T;
//     height: number;
    
//     size(): number; // 子树规模

//     insertAsLeftChild(left: T): BinNode<T>;
//     insertAsRightChild(rigth: T): BinNode<T>;

//     succ(): BinNode<T>;

//     traverseLevel<U>(child: U): void; // 子树层次遍历
//     traversePre<U>(child: U): void; // 子树先序遍历
//     traverseIn<U>(child: U): void; // 子树中序遍历
//     traversePost<U>(child: U): void; // 子树后序遍历
// }


class Node<T> {
    // parent: BinNode<T>;
    // data: 
    left: Node;
    right: Node;
    height: number;
    constructor(public data: T, public parent: Node) {
        this.parent = parent;
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0
    }

    insertAsLeftChild(e: T): void {
        this.left = new Node(e, this)
    }

    insertAsRightChild(e: T){
        this.right = new Node(e, this)
    }

    // 后代总数
    size(): number {
        var s: number = 1
        if(this.left) s += this.left.size()
        if(this.right) s += this.right.size()

        return s
    }

    succ() {}

    traverseLevel(){}
    traversePre(){}
    traverseIn(){}
    traversePost(){}
}

class BinTree<T> {
    _size: number;
    _root: Node;
    
    updateHeight(x: Node) {}

    size(): number {return this._size}
    empty(): boolean {return !this._root}
    root(): Node {return this._root}

    traverse(){}


}