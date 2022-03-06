/*Instrucciones: Revisar que las pruebas pasen, corregir las pruebas y 
hacer ajustes en esta función para que haga las validaciones que estan en las pruebas*/
function convertir(celsius) {
    let fahrenheit = celsius* (9 / 5) + 32;
   // fahrenheit = Math.floor(fahrenheit);
    return fahrenheit;
}

module.exports = convertir;