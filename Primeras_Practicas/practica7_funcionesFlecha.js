function helloW(nombre){
    return "Hola " + nombre + " welcome!";
};
console.log(helloW('Yuri'))

const helloWFlecha = (nombre) =>{
    return "Hola " + nombre + " welcome!";
};

console.log(helloWFlecha('Saida'))

//funcion suma
let suma = function(x,y){
    return x + y;
};

let suma2a = (x,y) =>{return x + y};
let suma3a = (x,y) => x + y;

var num1 = 4;
var num2 = 5;

console.log("La suma de " + num1 + " y " + num2 + " es igual a: ", suma(num1,num2))
console.log(`La suma de ${num1} y ${num2} es igual a `, suma(num1,num2));

console.log("Suma la: ", suma(4,5), "Suma 2da: " , suma2a(8,9), "Suma 3ra: " + suma3a(5,6));

//Tarea hacer una funcion de flecha para que en una sola linea regrese el cuadrado de un numero

var palabras = ['arbol', 'palabras','celular','Delta','Omega','Rito'];

var contarLetra = palabras.map(s => s.length);

console.log(contarLetra)

var contarLetras_2da = palabras.map(function(s) {return s.length})

//Funcion multiplicar numero de un array por dos

let numeritos = [3,6,1,2,3]

var multiplicarArray = mult => mult * 2;

var multiplicarNumeros = numeritos.map(multiplicarArray);

console.log(multiplicarNumeros);

