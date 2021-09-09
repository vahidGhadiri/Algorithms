function staircase(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < (n - 1) - i) {
        result += " ";
      } else {
        result += "#";
      }
    }
    result += "\n";
  }

  console.log(result);
}

staircase(10)
