const Stack = require('./index')

test('push something to stack and the stack will not empty', ()=>{
    let s = new Stack()
    s.push(1)
    expect(s.isEmpty()).toBe(false)
})

test('null', ()=>{
    let s = new Stack()
    expect(s.first).toBeNull()
})

test('pop empty stack will throw error', ()=>{
    let s = new Stack()
    expect(()=>{
        return s.top()
    }).toThrow(/stack/)
})







