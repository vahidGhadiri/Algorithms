const birthdayCandleCake = (arr) => {
  let maxHeightCandles = 0
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxHeightCandles) {
      maxHeightCandles = arr[i]
      res = 1
    } else if (arr[i] === maxHeightCandles) res++
  }
  console.log(res)
}

birthdayCandleCake([1, 1, 1, 1, 4, 6, 7, 7, 7, 9, 9])
