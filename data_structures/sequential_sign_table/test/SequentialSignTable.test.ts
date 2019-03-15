import SequentialSignTable from '../SequentialSignTable'

describe('SequentialSignTable Test', () => {
  it('it should find min and max key', () => {
    const st = new SequentialSignTable()
    st.set('b', 1)
      .set('c', 2)
      .set('f', 4)
      .set('a', 3)
    expect(st.min()).toBe('a')
    expect(st.max()).toBe('f')
  })

  it('it should get all keys or a specified range of keys', () => {
    const st = new SequentialSignTable()
    st.set('b', 1)
      .set('c', 2)
      .set('f', 4)
      .set('a', 3)
    expect(st.keys()).toEqual(['a', 'b', 'c', 'f'])
    expect(st.keys('a', 'f')).toEqual(['b', 'c'])
  })

  it('it should find the floor and ceilling key', () => {
    const st = new SequentialSignTable()
    st.set('c', 1)
      .set('e', 2)
      .set('g', 4)
      .set('a', 3)

    expect(st.floor('f')).toBe('e')
    expect(st.floor('g')).toBe('g')
    expect(st.ceiling('e')).toBe('e')
    expect(st.ceiling('b')).toBe('c')
  })


  it('it should delete the min key/value and max key/value', () => {
    const st = new SequentialSignTable()
    st.set('c', 1)
      .set('e', 2)
      .set('g', 4)
      .set('a', 3)
    expect(st.min()).toBe('a')
    expect(st.get('a')).toBe(3)
    st.deleteMin()
    expect(st.get('a')).toBeNull()
    expect(st.min()).toBe('c')

    expect(st.max()).toBe('g')
    expect(st.get('g')).toBe(4)
    st.deleteMax()
    expect(st.get('g')).toBeNull()
    expect(st.max()).toBe('e')
  })
})