function suma(x,y){
    return x + y;
}

module.exports = suma


test('Pruebas de un objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    console.log(data)
    expect(data).toEqual({one: 1, two: 2});
  });
  
  test('Validaciones usando un for', () =>{
        for(var i=0; i<10; i++){
            for(var j=1; j<10; j++)
                expect(i+j).not.toBe(0)
        }
  });