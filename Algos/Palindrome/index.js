//The Question is:
//Given a string, return true if the string is a palindrome or false if it is not
//Palindromes are string that form the same word if it is reversed.
// *DO* include spaces and punctuation in determining if the string is a palindrome.
//Example:
//palindrome abba = true
//palindrome baba = false


//Solution #1
// const palindrome = (str) => {
//     let result = ""
//     for (let char of str) {
//         result = char + result
//     }
//
//     return result === str
// }


const palindrome = (str) => {
    return str.split("").every((char, index) => {
        return char === str[str.length - index - 1]
    })
}


module.exports = palindrome
