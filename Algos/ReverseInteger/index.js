//Given an integer, return an integer that is the reverse
//ordering of numbers.
//--examples
// reverse(15) === 51
//reverse(981) === 189

const reverseInt = (int) => {
    let intToString = int.toString()
    let reversedStr = ''
    for (let char of intToString) {
        reversedStr = char + reversedStr
    }
    return parseInt(reversedStr) * Math.sign(int)
}


console.log(reverseInt(-92))
module.exports = reverseInt