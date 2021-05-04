let arr = [1, 1, 21, 4, 5, 6, -1, -5, -6, -7, 0, 0]


const plusMinus = () => {
  let positive = 0
  let negative = 0
  let zero = 0

  arr.forEach((num) => {
    if (num > 0) positive += 1
    else if (num < 0) negative += 1
    else zero += 1
  })
  console.log((positive / arr.length).toFixed(6))
  console.log((negative / arr.length).toFixed(6))
  console.log((zero / arr.length).toFixed(6))
}

console.log(plusMinus())