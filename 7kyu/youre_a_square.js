//Given an integral number, determine if it's a square number:
var isSquare = function(n){
    let x = Math.sqrt(n)
  return   Math.ceil(x) == Math.floor(x) ? true : false
  }