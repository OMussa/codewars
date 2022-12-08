/*Create a function that returns the sum of the two lowest positive numbers
 given an array of minimum 4 positive integers. 
 No floats or non-positive integers will be passed. */

function sumTwoSmallestNumbers(numbers) {  
 
    // sort numbers from least to greatest
     let sorted = numbers.sort((a,b)=> a-b)
    //grab the first two numbers and add them
     let final = sorted[0]+sorted[1]
     return final
  }