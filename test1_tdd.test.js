
const impresion = require('./impresion');

Test('Validar que se imprima una cadena de texto', ()=>{
    expect(impresion.holaMundo().toBe('¡Hola Mundo!'));
});