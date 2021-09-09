const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const testMaker = (first, end) => {
  const makeRange = (start, end) => {
    if (start === end) return [start]
    return [start, ...makeRange(start + 1, end)]
  }

  let numbers = makeRange(first, end)
  let randomNumbers = []

  for (let i = 0; i < 100; i++) {
    let i = Math.floor(Math.random() * numbers.length)
    randomNumbers = [...randomNumbers, numbers[i]]
  }
  return randomNumbers
}

console.log(bubbleSort(testMaker(1,1000)))