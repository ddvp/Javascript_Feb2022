function checkSign(num) {
    return (num > 0) ? "positive" : ((num < 0) ? "negative" : "zero");
}

module.exports = checkSign;

/*Instrucciones: hacer un script en jest que haga pruebas a esta funcion, minimo
 20 pruebas. Aqui un ejemplo de como funciona*/

console.log(checkSign(10))
console.log(checkSign(-789))
console.log(checkSign(0))
console.log(checkSign('899'))
console.log(checkSign('-899'))