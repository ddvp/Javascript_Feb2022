/*Instrucciones: Revisar que las pruebas pasen, corregir las pruebas y 
hacer ajustes en esta función para que haga las validaciones que estan en 
las pruebas*/
const convertir = require('./funcion_grados');

test('Test1: convertir 30 grados celsius a fahrenheit y validar que da 86', () => {
    expect(convertir(30)).toBe(86);
});

test('Test2: convertir -80 grados celsius a fahrenheit y validar que da -112', () => {
    expect(convertir(-80)).toBeCloseTo(-112,80);
});

test('Test3: revisar que la funcion regresa un numero', () => {
    let esNumero = 90;
    expect(esNumero == convertir(90));
});

test('Test4: revisar que la funcion no puede esperar strings, resultado esperado "No podemos usar strings', () => {
    function tests(){
        tests('No podemos usar strings');
    }
    expect(convertir('edw')).toThrowError;
});

test('Test5: revisar que la funcion no puede esperar valores Booleanos, resultado esperado "No podemos procesar valores Boleanos', () => {
    function tes(){
        tes('No podemos procesar valores booleanos');
    }
    expect(convertir(false)).toThrowError;
});