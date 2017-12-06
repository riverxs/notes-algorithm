// 二叉树抽象数据类型

interface BinNode<T> {
    parent: BinNode<T>;
    left: BinNode<T>;
    right: BinNode<T>;

    data: T;
    height: number;
    
    size(): number; // 子树规模

    insertAsLeftChild(left: T): BinNode<T>;
    insertAsRightChild(rigth: T): BinNode<T>;

    succ(): BinNode<T>;

    traverseLevel<U>(child: U): void; // 子树层次遍历
    traversePre<U>(child: U): void; // 子树先序遍历
    traverseIn<U>(child: U): void; // 子树中序遍历
    traversePost<U>(child: U): void; // 子树后序遍历
}


class Node<T> implements BinNode<T> {
    constructor(data: T, parent: BinNode<T>) {
        this.parent = parent;
        this.data = data
        this.left = null
        this.right = null
    }

    insertAsLeftChild(e: T) {

    }
}

