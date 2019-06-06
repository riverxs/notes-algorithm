import BinaryTreeNode from './BinaryTreeNode'

describe('Binary Tree test', () => {
  it('should new a binaryTreeNode instance', () => {
    const node = new BinaryTreeNode(23)
    expect(node.left).toBeNull()
    expect(node.right).toBeNull()
    expect(node.parent).toBeNull()
    expect(node.value).toBe(23)
  })

  it('should set left or right tree node', () => {
    const node = new BinaryTreeNode(2)
    const node1 = new BinaryTreeNode(1)
    const node2 = new BinaryTreeNode(3)
    node.setLeft(node1)
    node.setRight(node2)
    expect(node.left).toEqual(node1)
    expect((node.left as BinaryTreeNode<number>).value).toBe(1)
    expect(node.right).toEqual(node2)
    expect((node.right as BinaryTreeNode<number>).value).toBe(3)
  })

  it('should get the tree height', () => {
    const node = new BinaryTreeNode(2)
    const node1 = new BinaryTreeNode(1)
    const node2 = new BinaryTreeNode(3)
    node.setLeft(node1)
    node.setRight(node2)

    expect(node.height).toBe(1)
    expect(node.leftHeight).toBe(1)
    expect(node.rightHeight).toBe(1)
    expect(node.balanceFactor).toBe(0)

    const node3 = new BinaryTreeNode(4)
    node2.setRight(node3)

    expect(node.height).toBe(2)
    expect(node.leftHeight).toBe(1)
    expect(node.rightHeight).toBe(2)
    expect(node.balanceFactor).toBe(1)
  })

  it('should get the uncle of node', () => {
    const node = new BinaryTreeNode(2)
    const node1 = new BinaryTreeNode(1)
    const node2 = new BinaryTreeNode(3)
    node.setLeft(node1)
    node.setRight(node2)
    expect(node.uncle).toBeNull()
    expect(node1.uncle).toBeNull()
    const node3 = new BinaryTreeNode(4)
    const node4 = new BinaryTreeNode(5)
    node3.setRight(node)
    node3.setLeft(node4)
    expect(node1.uncle).toBe(node4)
    expect(node2.uncle).toBe(node4)
    expect((node1.uncle as BinaryTreeNode<number>).value).toBe(5)
    expect((node2.uncle as BinaryTreeNode<number>).value).toBe(5)
  })

  it('should update node value', () => {
    const node = new BinaryTreeNode(2)
    expect(node.value).toBe(2)
    node.setValue(11)
    expect(node.value).toBe(11)
  })

  it('should remove child node or replace child node', () => {
    const node = new BinaryTreeNode(2)
    const node1 = new BinaryTreeNode(1)
    const node2 = new BinaryTreeNode(3)

    node.setLeft(node1)
    node.setRight(node2)
    expect(node.left).toBe(node1)
    expect(node.right).toBe(node2)

    const res = node.removeChild(node1)
    expect(res).toBeTruthy()
    expect(node.left).toBeNull()

    expect(node.right).toBe(node2)
    const res2 = node.replaceChild(node2, node1)
    expect(node.right).toBe(node1)
  })

  it('should get the values through traverse action', () => {
    const node = new BinaryTreeNode(2)
    const node1 = new BinaryTreeNode(1)
    const node2 = new BinaryTreeNode(3)
    expect(node.traverseInOrder()).toEqual([2])
    node.setLeft(node1)
    expect(node.traverseInOrder()).toEqual([1,2])
    node.setRight(node2)
    expect(node.traverseInOrder()).toEqual([1,2,3])
  })

})