// import Convert from './convert'
const Convert = require('./convert')

test('convert number to binary format', () => {
  // let convert = new Convert()
  expect(Convert.convert(255, 2)).toBe('11111111')
})

test('test hexadecimal convert', ()=>{
  // let convert = new Convert()
  expect(Convert.convert(255, 16)).toBe('FF')
})

