class Queue {
  constructor() {
    this.queue = []
  }

  dequeue() {
    return this.queue.shift()
  }

  enqueue(ele) {
    return this.queue.push(ele)
  }

  tail() {
    return this.queue[this.queue.length - 1]
  }

  front() {
    return this.queue[0]    
  }

  isEmpty() {
    return this.size() == 0
  }

  size() {
    return this.queue.length
  }

}

module.exports = Queue