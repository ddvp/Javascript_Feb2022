const reversa = require('./reverseString');

/*Instrucciones: hacer pruebas en jest para que valide estas cadenas, minimo 15 pruebas.
boolean is not defined hacer esta validacion en código  
**Opcional si para hacer que funciones tiene que cambiar la funcion adelante 
console.log(reversa(boolean))*/

test('Test: Validar la comparacion del string', () => {
   // console.log(reversa('hola')) 
    expect(reversa('hola')).toMatch(/aloh/);
});

test('Test: Validar que los signos no son iguales ',() =>{
    //console.log(reversa('÷∞¢#@∞¢'))
    expect(reversa('+%&?')).not.toMatch('÷∞¢#@∞¢');
});

test('Test: Validar que la palabra contenga gres ',() =>{
        //console.log(reversa('gres'))
         expect(reversa('gres')).toContain('serg');
 });

test('Test: Validar que Casita Javascript no sea nulo ',() =>{
    //console.log(reversa('Casita Javascript'))
     expect(reversa('Casita Javascript')).not.toBeNull();
});

test('Test: Validar si es el texto es igual',() =>{
    //console.log(reversa('0987654321'))
     expect(reversa('1234567890')).toEqual('0987654321');
});

test('Test: Validar que sea texto y no numeros',() =>{
   //console.log(reversa('gres'))
    expect(reversa('gres')).not.toBe(123);
});

test('Test: Validar que el texto contenga exactamente lo esperado ',() =>{
    expected = 'Buen dia';
   expect(reversa('Buenos dias')).toEqual(expect.not.stringContaining(expected));
 });

 test('Test: Validar que el texto no este undefined',() =>{
    expect(reversa('mi texto')).not.toBeUndefined();
  });

  test('Test: Validar que el valor no sea un numero',() =>{
    expect(reversa('j')).not.toBeNaN();
  });

  test('Test: Validar que la palabra sea la misma',() =>{
    expect(reversa('anitalavalatina')).toBe('anitalavalatina');
  });

  test('Test: Verificar que la palabra tiene 11 elementos',() =>{
    expect(reversa('Guadalajara')).toHaveLength(11);
  });

  test('Test: Verificar que el texto es verdadero',() =>{
    expect(reversa('hola')).toBeTruthy();
  });

  test('Test: Verificar que el signo sea ÷∞¢#@∞¢ ',() =>{
    expect(reversa('¢∞@#¢∞÷')).toBe('÷∞¢#@∞¢');
  });

  test('Test: Verificar que el texto no contenga Error!',() =>{
    expect(reversa('qereq2313')).not.toContain('Error!');
  });

 