const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return arr
}

const test = [4,1, 3, 4, 8, 1, 8, 8, 41, 5]
console.log(insertionSort(test))