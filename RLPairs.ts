function RLPairs(str: string) {
    const squad = str.split("")
    let pairSquads = 0
    let count = 0;
    for (let i = 0; i < squad.length; i++) {
        if (squad[i] === "R") {
            count++
        } else {
            count--
        }

        if (count === 0) pairSquads++
    }
    return count === 0 ? pairSquads : false;
}

console.log(RLPairs("RRLLRRRLLLRLLLRRLLLLLLRRRRRR"))
console.log(RLPairs("RRLLRRRLLLRLLLRRR"))