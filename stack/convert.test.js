// import Convert from './convert'
const Convert = require('./convert')

test('convert number to binary format', () => {
  let convert = new Convert()
  expect(convert.convert(255, 2)).toBe('11111111')
})
