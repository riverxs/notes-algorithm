import HashTable from '../HashTable'

describe('HashTable Test', () => {
  it('it should be possible to create an empty hashTable with customized hash size', () => {
    const hashMap = new HashTable()
    expect(hashMap.buckets.length).toBe(97)
    expect(hashMap.getEntries()).toEqual([])

    const hashMap2 = new HashTable(111)

    expect(hashMap2.buckets.length).toBe(111)
    expect(hashMap2.getEntries()).toEqual([])
  })

  it('it should be possible to set element in hashTable', () => {
    const hashMap = new HashTable()
    hashMap.set('hello', 'world')
    expect(hashMap.getEntries()).toEqual([['hello', 'world']])
    hashMap.set('test', 'pass')
    expect(hashMap.getEntries()).toEqual([['hello', 'world'], ['test', 'pass']])

  })

  it('it should be possible to delete element from hashTable', () => {
    const hashMap = new HashTable()
    hashMap.set('one', 1)
           .set('two', 2)
           .set('three', 3)

    expect(hashMap.getEntries()).toEqual([['one', 1], ['two', 2], ['three', 3]])
    expect(hashMap.delete('four')).toBeNull()

    hashMap.delete('two')
    expect(hashMap.getKeys()).toEqual(['one', 'three'])
    expect(hashMap.getValues()).toEqual([1, 3])
  })

  it('it should be possible to get value with key from hashTable', () => {
    const hashMap = new HashTable()
    hashMap.set('one', 1)
           .set('two', 2)
           .set('three', 3)

    expect(hashMap.get('two')).toBe(2)
    expect(hashMap.get('three')).toBe(3)
    expect(hashMap.get('goo')).toBe(null)

  })

  it('it should be possible to judge whether exist element in hashTable', () => {
    const hashMap = new HashTable()
    hashMap.set('one', 1)
           .set('two', 2)
           .set('three', 3)

    expect(hashMap.has('one')).toBe(true)
    expect(hashMap.has('ooo')).toBeFalsy()
  })
})