const arr = ["vahid", "vahab", "shiva", "shahab"]

const linearSearch = (value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === value) console.log(`${value} is number ${i + 1}`)
    }
}

linearSearch("shahab")
