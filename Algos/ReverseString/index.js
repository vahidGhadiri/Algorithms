//The Question is:
//Given a string, returned a new string with the reversed order of characters
//Example:
//Reversed vahid = "dihav"


//SOLUTION #1
// const reverseString_1 = (str) => {
//     return str.split("").reverse().join("")
// }


// SOLUTION #2

const reverseString = (str) => {
    let reversed = ""
    //Classical For loop
    // for (let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed
    // }
    //ES6 For loop
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}


module.exports = reverseString


