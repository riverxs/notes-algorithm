import LinkedList from '../LinkedList'
import LinkedListNode from '../LinkedListNode';

describe('LinkedList', () => {
  it('should create an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('')
  })

  it('should append node into linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.toString()).toBe('1,2,3')
    expect((<LinkedListNode<number>>linkedList.tail).next).toBeNull()
  })

  it('it should prepend node to linked list', () => {
    const linkedList = new LinkedList()

    linkedList.prepend(2)

    expect((<LinkedListNode<number>>linkedList.head).toString()).toBe('2')
    expect((<LinkedListNode<number>>linkedList.tail).toString()).toBe('2')

    linkedList.append(1)
    linkedList.prepend(3)

    expect(linkedList.toString()).toBe('3,2,1')
  })

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.delete(1)).toBeNull()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)
    linkedList.append(5)
    linkedList.append(6)

    expect((<LinkedListNode<number>>linkedList.head).toString()).toBe('1')
    expect((<LinkedListNode<number>>linkedList.tail).toString()).toBe('6')

    const deletedNode = linkedList.delete(2)
    if (deletedNode instanceof LinkedListNode) {
      expect(deletedNode.value).toBe(2)
    }
    expect(linkedList.toString()).toBe('1,3,4,5,6')

    expect((<LinkedListNode<number>>linkedList.delete(1)).value).toBe(1)
    linkedList.delete(6)
    expect(linkedList.toString()).toBe('3,4,5')

    expect((<LinkedListNode<number>>linkedList.head).value).toBe(3)
    expect((<LinkedListNode<number>>linkedList.tail).value).toBe(5)
  })

  it('', () => {

  })
})

