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
})

