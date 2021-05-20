const helperMergeMethod = (leftArr, rightArr) => {
  let outPut = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    let leftElement = leftArr[leftIndex]
    let rightElement = rightArr[rightIndex]

    if (leftElement < rightElement) {
      outPut.push(leftElement)
      leftIndex++
    } else {
      outPut.push(rightElement)
      rightIndex++
    }
  }
  return [...outPut, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergingSort = (arr) => {
  if (arr.length <= 1) return arr

  const middleIndex = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middleIndex)
  const rightArr = arr.slice(middleIndex)

  return helperMergeMethod(mergingSort(leftArr), mergingSort(rightArr))
}

const test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log(mergingSort(test))