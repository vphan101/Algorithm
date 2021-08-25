/*
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome.
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a"
const expected1 = true

const str2 = "racecar"
const expected2 = true

const str3 = "Dud"
const expected3 = false

const str4 = "oho!"
const expected4 = false

function isPalindrome(str){
  let reversed = str.split("").reverse().join("")
  return str === reversed
}
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));


/* ******************************************************************************** */
/*
  Zip Arrays into Map

  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value
 */

const keys1 = ["abc", 3, "yo"]
const vals1 = [42, "wassup", true]
const expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
}

function zipArraysIntoMap(keys, values) {
  objectToReturn = {}

  for(var i=0; i<keys.length; i++){
    objectToReturn[keys[i]]= values[i]
  }
  console.log(objectToReturn)
  return objectToReturn
}
zipArraysIntoMap(keys1, vals)

/* ******************************************************************************** */
/*
  Invert Hash

  A hash table / hash map is an obj / dictionary

  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" }
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" }

function invertObj(obj) {
  newObject = {}

  for(key in obj) {
    console.log('originalKey:', key)
    console.log('original value obj[key]:', obj[originalKey])

    var newKey= obj[originalKey]
    var newValue= originalKey

    newObject[newKey]= newValue
  }
  console.log(newObject)
  return newObject
}

invertObj(obj1)