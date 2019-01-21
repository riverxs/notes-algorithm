import Stack from '../Stack'

describe('Test Stack Data Structure', () => {
  it('should create an empty stack', () => {
    const stack = new Stack()

    expect(stack.toString()).toBe('')
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('should push data to stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.toString()).toBe('2,1')
  })

  it('should pop data from stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.toString()).toBe('2,1')

    stack.pop()
    expect(stack.toString()).toBe('1')
    stack.pop()
    expect(stack.toString()).toBe('')
    expect(stack.pop()).toBeNull()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('should peek data from stack', () => {
    const stack = new Stack()

    stack.push('a')
    stack.push('b')

    expect(stack.toString()).toBe('b,a')

    expect(stack.peek()).toBe('b')
    expect(stack.peek()).toBe('b')

    expect(stack.toString()).toBe('b,a')
  })

  it('should be possible to push/pop objects', () => {
    interface StackEle {
      value: number,
      key: string
    }

    const stack = new Stack<StackEle>()

    const ele1 = {value: 1, key: 'test1'}
    const ele2 = {value: 2, key: 'test2'}

    function stringifier(value: StackEle): string {
      return `${value.key}:${value.value}`
    }

    stack.push(ele1)
    stack.push(ele2)

    expect(stack.toString(stringifier)).toBe('test2:2,test1:1')
    expect((stack.pop() as StackEle).value).toBe(2)
    expect((stack.pop() as StackEle).value).toBe(1)
  })

  it('should be possible to convert stack to array expression', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.toArray()).toEqual([3,2,1])
  })

  it('should be possible compute the stack\'s capacity', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.length()).toBe(3)
  })
})