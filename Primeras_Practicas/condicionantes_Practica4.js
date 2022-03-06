//Condicionantes
//if if/else
/*
var texto = 'servidor ON';

if(texto === 'Servidor OFF'){
    console.log('Test pass')
} else {
    console.log('Test fail')
}
*/
//Ejercicio avanzado = Ordenar un arreglo con burbuja

//const { Console } = require("console");

//¿Que hace esto?

console.log("****Tarea****")
console.log("****Ejercicio 1****")

let time = 11;

if(time < 10){
    greeting = "Good morning";
}else if(time < 20){
    greeting = "Good day"
}else{
    greeting = "Good evening";
}
console.log(greeting)


console.log("****Ejercicio 2****")
var last
var variable
var variable2

if(last = 0){
    if(variable = 5){
        variable2 = 7
    }
   
}


console.log("****Ejercicio 3****")
let num = 1;
let num2 = 2;
let foo = 3;
let BarProp = 4;

if(num <= num2 && foo > BarProp){
    num = 8
}

if(num <= num2 || foo > BarProp){
    num = 8
}

if(true){
    num = 8
}

var notTrue = false
if(notTrue){
    num = 8
}

console.log(num)



//Switch
//¿Porque salen 3 opciones? y corregirlo
console.log("****Switch****");

var rango = "Coronel";

switch(rango){
    case "Soldado razo" :
        console.log("No autorizado");
        break;
    case "Comandante" :
        console.log("Necesita autorizacion de su superior");
        break;
    case "Capitan" :
        console.log("Necesita autorizacion de su superior capitan");
        break;
    case "Coronel" :
        console.log("Autorizado");
        break;
    case "General" :
        console.log("Usuario Autorizado");
        break;
    default:
        console.log("Respuesta Usuario no autorizado");
        break;
}


//Tarea

console.log("******Opciones 1*********")
var test = {
    opciones: 43,
    testFunction : function(){
        console.log(this.opciones);
        
switch(String(this.opciones)){
    case '2':
        console.log("No autorizado")
        break;
    case '43':
        console.log("Necesita autorización")
        break;
    case '54':
        console.log("Autorización requerida")
        break;
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
        }

    }
};
test.testFunction();


console.log("******Opciones 2*********")
var dealer = 4
var x = this.dealer;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x < 9):
        console.log("between 5 and 8");
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}

