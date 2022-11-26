/*Every day you rent the car costs $40. 
If you rent the car for 7 or more days,
 you get $50 off your total. Alternatively, 
 if you rent the car for 3 or more days, 
 you get $20 off your total.*/
function rentalCarCost(d) {
    let total
    if(d >= 7 ){
      return total = (d * 40) -50
      
    } else if(d >= 3 ){
      total= (d*40) -20
      
    }else{
      total = d * 40
      
    }
    return total
  } 
    