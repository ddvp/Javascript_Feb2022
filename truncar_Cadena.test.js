//Instrucciones: crea una prueba para cada una de estas validaciones, nota estas validaciones pasan.
// Además aggrega el codigo que hace falta en el script truncar_Cadena.js para que las pruebas pasen

const truncateString = require('./truncar_Cadena');

let cadena = 'Siempre codifica como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives'

test('Test1: Validar que la cadena se corta en la longitud 8', () => {
    //console.log(truncateString(cadena, 60))
    expect(truncateString(cadena, 8)).toBe('Siempre ...');
    
});

test('Test2: Validar que la cadena se corta en la longitud 10',() =>{
    //console.log(truncateString(cadena,10))
    expect(truncateString(cadena, 10)).toBe('Siempre co...');
});
test('Test3: Validar que la cadena se corta en la longitud 20',() =>{
    expect(truncateString(cadena, 20)).toBe('Siempre codifica com...');
});
test('Test4: Validar que la cadena se corta en la longitud 50',() =>{
    expect(truncateString(cadena, 50)).toBe('Siempre codifica como si la persona que finalmente...');
});
test('Test5: Validar que la cadena se corta en la longitud 60',() =>{
    expect(truncateString(cadena, 60)).toBe('Siempre codifica como si la persona que finalmente mantendrá...');
});
