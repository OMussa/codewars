/*Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number. */
function descendingOrder(n){
    let arr = String(n).split('')
  let sorted = arr.map(x =>  Number(x)).sort((a,b) => b - a)
  let final = final.toString().replace(/,/g, '')
  return Number(final)
  }

  //Shorter and cleaner

  function descendingOrder(n){
    return parseInt(String(n).split('').sort((a,b)=> b -a).join(''))
  }