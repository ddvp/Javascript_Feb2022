const laPalabraMasLarga = require('./laPalabraMasLarga');

test('Verificar que la palabra mas larga contiene 8 elementos', ()=>{
   expect(laPalabraMasLarga('hola favorito color')).toBe(8);
});

test('Validar que sea igual a 11 elementos', ()=>{
    expect(laPalabraMasLarga('maravilloso dia')).toEqual(11);
});

test('Validar que no tenga 8 elementos', ()=>{
    expect(laPalabraMasLarga('el arbol es verde')).not.toBe(8);
});