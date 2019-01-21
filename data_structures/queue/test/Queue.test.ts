import Queue from "../Queue";

describe('Test Queue Data Structure', () => {
  it('should create an empty queue', () => {
    const queue = new Queue()
    expect(queue).not.toBeNull()
    expect(queue.isEmpty()).toBe(true)
  })

  it('should enqueue an element', () => {
    const queue = new Queue()

    queue.enqueue(1)
    expect(queue.toString()).toBe('1')

    queue.enqueue(2)
    expect(queue.toString()).toBe('1,2')
  })

  it('should dequeue an element', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.toString()).toBe('1,2')

    expect(queue.dequeue()).toBe(1)
    expect(queue.toString()).toBe('2')

    expect(queue.dequeue()).toBe(2)
    expect(queue.toString()).toBe('')
    expect(queue.dequeue()).toBeNull()
  })

  it('should read the element at the front of the queue without removing it', () => {
    const queue = new Queue()
    expect(queue.peek()).toBe(null)

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
    expect(queue.toString()).toBe('1,2')
  })

  it('should read the element at the tail of the queue without removing it', () => {
    const queue = new Queue()
    expect(queue.peek()).toBe(null)

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.tail()).toBe(2)
    expect(queue.tail()).toBe(2)
    expect(queue.toString()).toBe('1,2')
  })

  it('should enqueue and dequeue the object element', () => {
    interface QueueEle {
      key: string,
      value: number
    }

    const queue = new Queue<QueueEle>()

    function stringifier(value: QueueEle): string {
      return `${value.key}:${value.value}`
    }

    queue.enqueue({key: 'test1', value: 1})
    queue.enqueue({key: 'test2', value: 2})

    expect(queue.toString(stringifier)).toBe('test1:1,test2:2')
    expect(queue.dequeue()).toEqual({key: 'test1', value: 1})
    expect(queue.toString(stringifier)).toBe('test2:2')
  })

  it('should compute the length of queue', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(1)

    expect(queue.length()).toBe(4)
  })
})