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

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect((<LinkedListNode<number>>linkedList.head).value).toBe(1)
    expect(linkedList.toString()).toBe('1,2,3')
    expect((<LinkedListNode<number>>linkedList.head).toString()).toBe('1')
    expect((<LinkedListNode<number>>linkedList.tail).toString()).toBe('3')

    const deletedNode1 = linkedList.deleteTail()

    expect((<LinkedListNode<number>>deletedNode1).value).toBe(3);
    expect(linkedList.toString()).toBe('1,2');
    expect((<LinkedListNode<number>>linkedList.head).toString()).toBe('1');
    expect((<LinkedListNode<number>>linkedList.tail).toString()).toBe('2');

    const deletedNode2 = linkedList.deleteTail();

    expect((<LinkedListNode<number>>deletedNode2).value).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect((<LinkedListNode<number>>linkedList.head).toString()).toBe('1');
    expect((<LinkedListNode<number>>linkedList.tail).toString()).toBe('1');

    const deletedNode3 = linkedList.deleteTail();

    expect((<LinkedListNode<number>>deletedNode3).value).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  })

  it('should delete linked list head', () => {
    const linkedList = new LinkedList();

    expect(linkedList.deleteHead()).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    linkedList.head instanceof LinkedListNode && expect(linkedList.head.toString()).toBe('1');
    linkedList.tail instanceof LinkedListNode && expect(linkedList.tail.toString()).toBe('2');

    const deletedNode1 = linkedList.deleteHead();

    deletedNode1 instanceof LinkedListNode && expect(deletedNode1.value).toBe(1);
    expect(linkedList.toString()).toBe('2');
    linkedList.head instanceof LinkedListNode && expect(linkedList.head.toString()).toBe('2');
    linkedList.tail instanceof LinkedListNode && expect(linkedList.tail.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteHead();

    deletedNode2 instanceof LinkedListNode && expect(deletedNode2.value).toBe(2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new LinkedList()

    interface testNode {
      value: number,
      key: string
    }

    const nodeValue1: testNode = { value: 1, key: 'key1'}
    const nodeValue2: testNode = { value: 2, key: 'key2'}

    linkedList.append(nodeValue1).prepend(nodeValue2)

    interface nodeStr<T> {
      (value: T): string
    }
    const nodeStringifier: nodeStr<testNode> = value => `${value.key}:${value.value}`;
    expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  })

  it('should find node by callback', () => {
    interface TestNode {
      value: number,
      key: string
    }
    const linkedList = new LinkedList<TestNode>()

    linkedList.append({key: 'test1', value: 1})
              .append({key: 'test2', value: 2})
              .append({key: 'test3', value: 3})

    const  node = linkedList.find({key: 'test2', value: 2}, value => value.key === 'test2')

    expect(node).toBeDefined();
    expect((<LinkedListNode<TestNode>>node).value.value).toBe(2);
    expect((<LinkedListNode<TestNode>>node).value.key).toBe('test2');
    expect(linkedList.find({key: 'test3', value: 3}, value => value.key === 'test5' )).toBeNull();

  })

  it('should create linked list from array', () => {
    const linkedList = new LinkedList<number>()

    linkedList.formArray([1,1,2,3,3,4,5]);
    expect(linkedList.toString()).toBe('1,1,2,3,3,4,5')
  })

  it('should find node by means of custom compare function', () => {
    type compareResult = 0 | -1 | 1

    interface TestNode {
      value: number,
      customValue: string
    }

    const node1 = {value: 1, customValue: 'test1'}
    const node2 = {value: 2, customValue: 'test2'}
    const node3 = {value: 3, customValue: 'test3'}

    interface TestComparatorFn {
      (a: any, b: any): compareResult | Error
    }

    const comparatorFn: TestComparatorFn = (a, b) => {
      if (a.customValue === b.customValue) return 0
      return a.customValue < b.customValue ? -1 : 1
    }

    const linkedList = new LinkedList<TestNode>(comparatorFn)

    linkedList.append(node1)
              .append(node2)
              .append(node3)

    const node = linkedList.find({value: 2, customValue: 'test2'})

    expect(node).toBeDefined()
    expect((node as LinkedListNode<TestNode>).value.value).toBe(2)
    expect((node as LinkedListNode<TestNode>).value.customValue).toBe('test2')
    expect(linkedList.find({value: 2, customValue: 'test6'})).toBeNull()
  })

})

