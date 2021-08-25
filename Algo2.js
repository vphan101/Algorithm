Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC"
const expected1 = "abcABC"

const str2 = "helloo"
const expected2 = "helo"

function stringDedupe(str) {
    var hasSeen = {}
    var newStr = ''

    for(var i=0; i<str.length; i++){
        var character = str[i]
        console.log(character)
    }
    return newStr
}
stringDedupe(str2)

/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello"
const expected1 = "olleh"

const str2 = "hello world"
const expected2 = "olleh dlrow"

const str3 = "abc def ghi"
const expected3 = "cba fed ihg"

function reverseWords(str) {
    return str.split("").reverse().join("").reverse().join("")
}
console.log(reverseWords("str1"))

function reverseWords(str) {
    console.log(str)

    var newStr = ""
    var strARray = str.split("")
    console.log(strArray)

    for(var i=0; i<strArray.length; i++){
        console.log("Start of Outer Loop")
        for(var j= strArray[i].length -1; j>=0; j--){
            console.log("Start of Inner Loop")
            newStr += word[j]
        }
    }
    return newStr
}
reverseWords(str3)