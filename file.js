//Para uma constante c = 10, e para n = 1, 2, 4, 6, 8, 16

function rec1(number){
  if(number === 0){
    return 0;
  }
  return 10 + rec1(number - 1);

}
//Para n = 1, 2, 4, 6, 8, 16
function rec2(number){
  if(number === 0){
    return 0;
  }
  return number + rec2(number - 1);
}

//Para uma constante c = 10, e para n = 1, 2, 4, 6, 8, 16 
function rec3(number){
  if(number < 1){
    return 10;
  }
  return 2 * rec3(number/2) + 10;
}

//Para uma constante a = 5, b = 2 e c = 10, e para n = 1, 2, 4, 6, 8, 16 

function rec4(number){
  if(number < 1){
    return 10;
  }
  return 5 * rec4(number/2) + (10*number);
}

let vetor = [1,2,4,6,8,16];


vetor.forEach(function(value){
  console.log("Para o número: "+value+"\n");
  console.log("rec1: "+rec1(value))
  console.log("rec2: "+rec2(value))
  console.log("rec3: "+rec3(value))
  console.log("rec4: "+rec4(value))
  console.log("\n")
  console.log('========================')
})
