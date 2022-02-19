//objetos

//objeto vacio

var emptyObject = {};
console.log(emptyObject);
console.log(typeof emptyObject);

//Objeto persona

var personaObject = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34
}
console.log('Objeto persona: ', personaObject)
console.log('Propiedad edad: ',personaObject.age)

personaObject['salario'] = 10000;
personaObject.age = 29;

console.log('Objeto persona: ', personaObject)
console.log('Tipo propiedad edad: ',typeof personaObject.age)
console.log('Tipo propiedad firstname: ',typeof personaObject.firstName)
console.log('\n ############# \n')

for(var member in personaObject){
    if(personaObject.hasOwnProperty(member)){
    console.log("el valor de member: ", member)
    console.log('La propiedad ' + member + ' tiene el valor ' + personaObject[member])
    
    }
}
console.log('\n ################### \n')
// La forma "tradicional" de hacer un objeto
var miCarro = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

var myCar = new Object();
console.log(myCar)

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log("objetos: ",miCarro,'\n', myCar)
console.log(myCar.color);

myCar['make'] = 'Nissan';
myCar.model='Bluebird';
myCar.year = 1969;
myCar.color = 'blue'
console.log('\n', myCar)

console.log("############ objeto casa #######")
//objeto casa con personas adentro con la funcion de saludar o hablar

var casaObject = {
    persona1: 'Ana',
    persona2: 'Juan',
    persona3: 'Leo',
    saludar: function(persona1,persona2,persona3){
       return  'hola '+ this.persona1 + ' hola ' + this.persona2 + ' hola ' +
        this.persona3
        
    }
};
console.log(casaObject.saludar());

//Diferentes propiedades para objetos

var objetoExe = new Object();
var cadena = 'String';
var random = Math.random();
var obj = Object();

objetoExe.type = 'referencia agregar propiedad con un punto';
objetoExe['fecha de hoy'] = 'referencia a agregar una propiedad con corchetes,comillas y espacios';
objetoExe[cadena] = 'referencia agregar una propiedad con una variable string';
objetoExe[random] = 'referencia agregar una propiedad con una variable numerica';
objetoExe[obj] = 'referencia para agregar una propiedad con otro objeto';
objetoExe[''] = 'referencia agregar una propiedad vacia';

console.log(objetoExe)

console.log(Object.getOwnPropertyNames(objetoExe))
console.log(Object.keys(objetoExe))
console.log(Object.getOwnPropertyDescriptor(objetoExe))

console.log('\n ############### \n');
console.log('\n ############### Propiedades  \n');
//Ejercicio opcional, crear 10 propiedades con un for y un numero random, a un objeto

var miObjeto = new Object(),
    str = 'string',
    rando = Math.random();
    

    miObjeto[str] = 'Valor de cadena'
    miObjeto[rando] = 'Numero aleatorio';
    
    console.log(miObjeto)






//objetos primitivos
console.log('###########Objetos primitivos')
var variablesFlex;

new Boolean(true).valueOf();
console.log(typeof Boolean)
console.log('Objeto primitivos booleano: ', Boolean);

//Objeto persona con function

function persona(name, edad, genero){
    this.nombre = name;
    this.edad = edad;
    this.genero = genero;
};

var maria = new persona('Maria', 25,'Mujer')
var marifer = new persona('Marifer',34,'Mujer')
var Luis = new persona('Luis',45,'Hombre')

console.log(maria)

function auto(marca,model,year,owner){
    this.marca = marca;
    this.modelo = model;
    this.anio = year;
    this.dueno = owner;
}
var car54 = new auto('Seat','Cupra',2020,maria)
var car67 = new auto('VW','Bocho',2010,marifer)

car54.color = 'Plata';

console.log(car54)
console.log(car67)

console.log('\n #################################### \n')

//Funciones dentro de objetos

var animal = {
    type: 'Invertebrados',
    displayType: function(){
        console.log(this.type)
    }
};

var animal67 = Object.create(animal);

animal67.displayType();
animal67.type = 'Mamifero';
animal67.displayType();

console.log('\n #################################### \n')


function ownerCar(name,age,gender){
    this.nombre= name;
    this.edad = age;
    this.genero = gender;
}

function displayCar(){
    var impresion = `Un coche ${this.year} ${this.modelo} a la venta, propietario ${this.owner.nombre}`;
    console.log(impresion)
    // " un coche " + this.year + " a la venta, dueña" + this.owner.name
}

function carrito(marca,modelo,year,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}


var diana = new ownerCar('Diana',20, 'Mujer')
console.log(diana)
var car23 = new carrito('Audi','A3', 2015,diana)

car23.displayCar();


console.log('\n #################################### \n')

const Manager = {
    name : 'Guillermo',
    company : 'Telefonica',
    edad: 18,
    job : 'Software engineer'
}

const Interno = {
    name: 'Francsico',
    edad: 21,
    job: 'Ir por los cafes y sacar copias'
}

function miEdad(){
    console.log('Tengo ', this.edad, 'años');
    console.log(`Tengo ${this.edad} años`);
}

function sayHi(){
    console.log('Hola, mi nombre es ', this.name)
}


Manager.sayHi = sayHi;
Interno.sayHi = sayHi;
Manager.miEdad = miEdad;

Manager.sayHi();
Interno.sayHi();
Manager.miEdad();

//Tarea explicar que hace el siguente código


var persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
        console.log(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function () {
        console.log('Hola, Soy ' + this.nombre[0] + '. ');
    }
};

persona.saludo()
persona.bio()
console.log("Interes", persona.intereses[1])

persona.despedida = function () {
    console.log("¡Adiós a todos!");
}

persona.despedida()

//TDD;