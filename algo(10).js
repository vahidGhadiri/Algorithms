const numberLineJumps = (x1, v1, x2, v2) => {
  const max = 10000
  let result = "NO"
  for (let i = 0; i <= max; i++) {
    x1 = x1 + v1
    x2 = x2 + v2
    if (x1 == x2) {
      result = "YES"
      break
    }
  }
  return result
}

console.log(numberLineJumps())