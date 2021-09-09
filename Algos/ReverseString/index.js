//The Question is:
//Given a string, returned a new string with the reversed order of characters
//Example:
//Reversed vahid = "dihav"


//SOLUTION #1
const reverseString = (str) => {
    return str.split("").reverse().join("")
}

module.exports = reverseString