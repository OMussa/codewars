function XO(str) {
    if((str.match(/o/g) || []).length + (str.match(/O/g) || []).length == (str.match(/x/g) || []).length + (str.match(/X/g) || []).length){
      return true
    }else{
      return false
    }
    
    
  }

  //Ternary
  function XO(str) {
    return (str.match(/o/g) || []).length + (str.match(/O/g) || []).length == (str.match(/x/g) || []).length + (str.match(/X/g) || []).length ? true : false
   
    
    
  }