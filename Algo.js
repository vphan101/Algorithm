var string= "Algo in the morning"

function stringAcronym(str) {
    var arr = str.split(" ")
    console.log(arr)
    var acronym = ""

    for(var i=0;i<arr.length; i++){
        var first_acronym = arr[i][0]
        acronym = acronym + first_acronym
    }
    return acronym
}

var string = "Algo in the morning" 
console.log(stringAcronym(string))



function caseInsensitiveCompare(stringA, stringB) {
    if (stringA.length != stringB.length) {
      return false
    }
    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()
    return stringA == stringB
  }
  
  console.log(caseInsensitiveCompare("WILL THIS WORK", "will this work"))


  function parensValid(str) {
    countA = 0;
    countB = 0;
  var parenthesis = "(, )"
  for(var i = 0; i < str.length; i++){
      if(str[i] == "(") {
          countA ++
      }
      else if(str[i] == ")"){
        countB ++
      }
          
      }
      console.log(countA)
      console.log(countB)    
      if (countA == countB){
          return true
      }
      return false
  }

str1 = "Y(3(p)p(3)r)s"
console.log(parensValid(str1))
//3 3 true   is the answer

str2 = "N(0(p)3"
console.log(parensValid(str2))
//2 1 false  is the answer