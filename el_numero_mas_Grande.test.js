const largestOfFour = require('./el_numero_mas_Grande');

test('Test1: Validar que no contenga un texto', () =>{
    expect(largestOfFour([[4, 5, 54, 3]])).not.toContain('Hola');
});

test('Test2: Validar el valor no es nulo', () =>{
    expect(largestOfFour([[4, 5, 54, 3]])).not.toBeNull();
});

test('Test3: Validar que no es undefined', () =>{
    expect(largestOfFour([[4,5,54,3]])).not.toBeUndefined();
});
test('Test4: Validar el numero mas grande del array es 54', ()=>{
    let mayor = 54;
    expect(largestOfFour(([[4, 5, 54, 3]]))).toContain(mayor);

});
test('Test5: ', ()=>{
    
});
test('Test6: ',()=>{
    
});
test('Test7: ', ()=>{

});
test('Test8: ', ()=>{

});
test('Test9: ',()=>{

});
test('Test10: ',()=>{

});
test('Test11: ',()=>{

});
test('Test12: ', ()=>{

});
test('Test13: ', ()=>{

});
test('Test14: ',()=>{

});
test('Test15: ', ()=>{

});
test('Test16: ', ()=>{

});
test('Test17: ', ()=>{

});
test('Test18: ', ()=>{

});
test('Test19: ', ()=>{

});
test('Test20: ', ()=>{

});
