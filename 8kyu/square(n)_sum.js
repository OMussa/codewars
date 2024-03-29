//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    let sum =0
  for(let i = 0; i<numbers.length;i++){
    sum+= Math.pow(numbers[i],2)
  }
    return sum
  }

  //faster solution
  function squareSum(numbers){
    return numbers.reduce((acc,c) => acc + Math.pow(c,2),0)
      
    }