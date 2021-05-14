let arr = [
  [2, 4, 6], [4, 5, 6], [10, 1, 12]
]

const multiDimensionalArr = () => {
  let rightToLeft = 0
  let leftToRight = 0

  for (let i = 0; i < arr.length; i++) {
    rightToLeft += arr[i][i]
    leftToRight += arr[arr.length - 1 - i][i]
  }
  return Math.abs(rightToLeft - leftToRight)
}

console.log(multiDimensionalArr())
