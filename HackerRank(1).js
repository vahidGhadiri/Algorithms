//I've got a letter; Tell me the value of the largest data and its index

const arr = [11, 18, 9, 25, 36, -5, 15, 86, 75, 29]

const largest = () => {
  let max = arr[0]
  let loc = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      loc = i
    }
  }
  return {
    max,
    loc
  }
}

console.log(largest())
