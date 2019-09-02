import { binarySearchRecursion } from './binarySearch'

describe('test recursion version ', () => {
  it('should work correctly', () => {
    const dataArray = [1,3,4,5,8,10, 13,14,17,19,23,32,40,41,43]
    const idx1 = binarySearchRecursion(dataArray, 10)
    expect(idx1).toBe(5)
    const idx2 = binarySearchRecursion(dataArray, 19)
    expect(idx2).toBe(9)
    expect(binarySearchRecursion(dataArray,41)).toBe(dataArray.length - 2)
  })
})