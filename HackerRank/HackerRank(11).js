const betweenTwoSets = (a, b) => {
  const max = 100
  let result = 0
  for (let i = 1; i <= max; i++) {
    if (a.every(int => (i % int === 0))) {
      if (b.every(int => (int % i === 0))) {
        result++
      }
    }
  }
  return result
}

console.log(betweenTwoSets([2, 4], [16, 32, 96]))

