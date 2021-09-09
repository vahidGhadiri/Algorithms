const passwordGenerator = () => {
  const makeRange = (start, end) => {
    if (start === end) return [start]
    return [start, ...makeRange(start + 1, end)]
  }

  const passwordLength = 16
  const char = makeRange(33, 126)
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    let i = Math.floor(Math.random() * char.length)
    password += String.fromCharCode(char[i])
  }
  console.log(password)
}

passwordGenerator()
