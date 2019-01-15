import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect((<LinkedListNode<number>>node1.next).value).toBe(2);
  });

  it('should convert node to string', () => {
    const node1 = new LinkedListNode(1);

    expect(node1.toString()).toBe('1');

    const node2 = new LinkedListNode('string value')

    expect(node2.toString()).toBe('string value');
  });

  it('should convert node to string with custom stringifier', () => {
    interface nodeVal {
      value: number,
      key: string
    }
    const nodeValue: nodeVal = { value: 1, key: 'test' };
    const node = new LinkedListNode(nodeValue);
    const toStringCallback = (value: nodeVal) => `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
  });
});
