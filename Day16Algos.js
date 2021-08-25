/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: dict.has_key(key)
*/

const arr1 = ["a", "a", "a"]
const expected1 = {
  a: 3,
}

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
}

const arr3 = []
const expected3 = {}

function frequencyTableBuilder(arr) {
    var count = 0
  
}

const arr1 = ["a", "a", "a"]

Count =0

function frequencyTableBuilder(arr){
for(let i = 0; i <  arr1.length; i++){
  
  if( arr1[i] == "a"){
    Count += 1
  }
}
  return Count
}

console.log(frequencyTableBuilder(Count))


str = ["a", "b", "a", "c", "B", "c", "c", "d"]

let letterCount = {}; 

for(let i = 0; i < str.length; i++){
  
  if (letterCount[str[i]]){
    letterCount[str[i]] += 1
  } else {
    letterCount[str[i]] = 1
  }
}

console.log(letterCount)

/* ******************************************************************************** */

/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test"
const expected1 = "test a is This"

function reverseWordOrder(wordsStr) {
  return str1.split("").reverse().join()
}
console.log(reverseWordOrder("This is a test"))

