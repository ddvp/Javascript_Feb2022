function largestOfFour(arr) {
    let result=[];
    for(let i=0;i<arr.length;i++){
      let max=Math.max(...arr[i]);
      result.push(max);
    }
    return result;
  }

  module.exports = largestOfFour;
  
/*Instrucciones: hacer un script en jest que haga pruebas a esta funcion, minimo 20 pruebas. 
  Aqui un ejemplo de como funciona*/
  /*
  console.log(largestOfFour([[4, 5, 54, 3]]));
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, 345001, 857, 1]]));
  */


  
 