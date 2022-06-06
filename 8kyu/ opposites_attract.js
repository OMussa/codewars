function lovefunc(flower1, flower2){
    let inLove= 0;
    if (flower1 % 2 == 0 && flower2 %2==1  || flower2 % 2 == 0 && flower1 %2==1  ){
      return inLove = true;
    }else{
      return inLove = false
    }
    console.log(inLove);
  }
  console.log(lovefunc(0,0))