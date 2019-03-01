import DoublyLinkedList from '../DoublyLinkedList'
import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('doublyLinkedList', () => {
  it('should prepend some value', () => {
    const doublyLinkedList = new DoublyLinkedList()
    const doublyList = doublyLinkedList.prepend(1).prepend(2).prepend(3)

    expect((doublyList.head as DoublyLinkedListNode<number>).value).toBe(3)
    expect((doublyList.tail as DoublyLinkedListNode<number>).value).toBe(1)
    expect(doublyList.toArray().toString()).toBe('3,2,1')
  })

  it('should append some value', () => {
    const doublyLinkedList = new DoublyLinkedList()
    const doublyList = doublyLinkedList.append(1).append(2).append(3)

    expect((doublyList.head as DoublyLinkedListNode<number>).value).toBe(1)
    expect((doublyList.tail as DoublyLinkedListNode<number>).value).toBe(3)
    expect(doublyList.toArray().toString()).toBe('1,2,3')
  })

  it('should find the correct value ', () => {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.append(1).append(2).append(3).append(4)

    expect(doublyLinkedList.find(5)).toBeNull()
    expect((doublyLinkedList.find(2) as DoublyLinkedListNode<number>).value).toBe(2)
    expect((doublyLinkedList.find(4) as DoublyLinkedListNode<number>).value).toBe(4)
  })

  it('should generate doublyLinkedList from array', () => {
    const doublyLinkedList = new DoublyLinkedList()
    const newList = doublyLinkedList.fromArray([1,2,3,4,5])
    expect(newList.toString()).toBe('1,2,3,4,5')
    expect((newList.head as DoublyLinkedListNode<number>).value).toBe(1)
    expect((newList.tail as DoublyLinkedListNode<number>).value).toBe(5)
  })

  it('should generate array', () => {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.fromArray([1,2,3,4,5])
    const newList = doublyLinkedList.toArray()
    expect(newList[0].value).toBe(1)
    expect(newList[1].value).toBe(2)
  })

  it('should deleteTail correctly', () => {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.append(1).append(2)
    expect((doublyLinkedList.tail as DoublyLinkedListNode<number>).value).toBe(2)
    expect((doublyLinkedList.tail as DoublyLinkedListNode<number>).next).toBeNull()
    expect(doublyLinkedList.toString()).toBe('1,2')

    const deleteTail = doublyLinkedList.deleteTail()

    expect((deleteTail as DoublyLinkedListNode<number>).value).toBe(2)
    expect((doublyLinkedList.tail as DoublyLinkedListNode<number>).value).toBe(1)

    const deleteTail2 = doublyLinkedList.deleteTail()
    expect((deleteTail2 as DoublyLinkedListNode<number>).value).toBe(1)
    expect(doublyLinkedList.head).toBeNull()
    expect(doublyLinkedList.tail).toBeNull()
  })

  it('should reverse doublyLinkedList', () => {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.fromArray([1,2,3,4,5])
    doublyLinkedList.reverse()
    expect(doublyLinkedList.toString()).toBe('5,4,3,2,1')
  })

})