//funciones

//procedimientos o conjunto de declaraciones, para hacer una tarea especifica
//tiene que ser definida y despues llamada
var elNombre;
elNombre = "Diana"

console.log(miNombre("Diana"))

function miNombre(name){
    return "Hola " + name;
}

function suma(num1,num2){
    return num1+num2;
}

console.log(suma(4,5))

function cuadrado(a){
    return a+a
}
console.log(cuadrado(2,7,9,6))

function checkNumero(numero){
    if(numero === 40){
        //console.log("Correcto")
       return('correcto')
    }else{
       // console.log("Incorrecto")
       return('incorrecto')
    }
}
console.log(checkNumero(3));
//checkNumero(40);

//funcion que diga si un numero es par o impar
function parImpar(num){
    if(num % 2 === 0)
        return 'Es un numero par'
    else
        return 'No es un numero par'
    
}
console.log("El numero 4 es: ", parImpar(4))
console.log("El numero -7 es: ", parImpar(-7))


//Tarea encontrar numero impares y pare en un arreglo con numero del 0 al 100

var arreglo = [];
for(var i=0;i<=100;i++){
    arreglo.push(i)
}

//Arreglo lleno con numeros 100 numeros random ***** Math num lirary needed
var arreglo2 = [];
for(var i=0; i<=100; i++){
    arreglo2.push(Math.floor(Math.random()*(100-1))+1)
}
console.log(arreglo2)

//Tarea: Three company: input asd output aaasssdd *usando una funcion
//input yuri output yyyuuurrriii

//charAt(i) *separa una letra de una cadena  cadena.charAt(*laletra que queremos separar)
var cadena = "yuri"
var n = cadena.charAt(i);
console.log(n)
//Tarea: Palindromo "ana","oso","casa"

/*
input output
casa No es un palindromo
oso si es un palindromo
ana si es un palindromo
*/
/*
console.log('########Palindromo');
function palindromo(array){
    v1 = array.length
    if(v1 === 0){
        return false;
    }
    for(i=0; i < v1/2; i++){
        if(array[i]! == array[v1 -i -1]){
            return alert("no es palindromo");
        }
    }
    return alert("es palindromo");
}
palindromo(prompt('Ingresa la palabra: '));
*/
/*
Tarea crear una funcion que regrese la siguiente cadena

input output
Marcia una manzana para Marcia y una manzana para mi
Paco una manzana para paco y una manzana para mi
"" una manzana para ti y una manzana para mi
8877
*/

//una funcion dentro de una funcion
function ejecutar(algunafuncion, valor){
    algunafuncion(valor)
}
function decir(palabra){
    console.log(palabra)
}
ejecutar(decir,'hola');

