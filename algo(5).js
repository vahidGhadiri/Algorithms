const arr = [10, 2, 4, 1, 8]

const miniMaxSum = () => {
    let sortedArr = arr.sort((a, b) => a < b ? -1 : 1)
    let min = 0
    let max = 0
    for (let i = 1; i < sortedArr.length; i++) max += sortedArr[i]
    for (let i = 0; i < sortedArr.length - 1; i++) min += sortedArr[i]
    console.log(sortedArr, max, min)
}

miniMaxSum()

