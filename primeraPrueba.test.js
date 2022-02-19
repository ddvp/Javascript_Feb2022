//primeras pruebas

test('Validar el texto de una constante',()=>{
    const hola = 'Hola mundo';
    expect(hola).toBe('Hola mundo');
});

test('Validar la suma de numeros flotantes',() =>{
    var resultado = 0.2 + 0.4;
    console.log(resultado)
    //expect(resultado).toBe(0.6);
    //expect(resultado).toEqual(0.6);
    expect(resultado).toBeCloseTo(0.6);
});

test('Validad que esta cadena no contiene la letra U', () =>{
    expect('Williberto').not.toMatch(/U/);
    const palabra = 'casa';
    expect(palabra).toMatch('casa');
});

test('Validar que una cadena contenga un texto', ()=>{
    const palabra = 'Computadora';
    expect(palabra).toContain('Comp');
});

const listaDeCompras = ['jabon','arroz','pasta','papel'];

test('Validar que la list de pruebas contiene arroz',()=>{
    expect(listaDeCompras).toContain('arroz');
});

test('Validar que la list de pruebas no contiene azucar',()=>{
    expect(listaDeCompras).not.toContain('azucar');
});

test('Validar un valor que no es nullo', () =>{
    var n = null;
    var z = 0;
    var r;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

    expect(z).not.toBeNull;
    expect(z).not.toBeUndefined();

    expect(r).not.toBeDefined();

})