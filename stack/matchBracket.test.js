const matchBracket = require('./matchBracket')

test('test bracket match', ()=>{
  const testExp1 = '([()])()[()]()'
  const testExp2 = '([()])()[(]()'
  const b1 = '()'
  const b2 = '[]'
  expect(matchBracket(testExp1, b1, b2)).toBeTruthy()
  expect(matchBracket(testExp2, b1, b2)).toBeFalsy()
})

