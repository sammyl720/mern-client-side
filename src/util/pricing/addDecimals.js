module.exports = stringDigit => {
  const toArray = stringDigit.split('')
  const lastTwo = toArray.splice(-2, toArray.length + 2)
  return [...toArray, '.', ...lastTwo].join('')
}
