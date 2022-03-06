function laPalabraMasLarga(str) {

    let strArray=str.split(' ');
    let max=0;
    for(let i=0;i< strArray.length;i++){
      if(strArray[i].length>max)
        max=strArray[i].length;
    }
    console.log(strArray);

    return max;
}
module.exports = laPalabraMasLarga;

//Esta funcion nos regresa el numero de letras de la palabra más grande, acontinuacion ejemplos de como funciona
//Instrucciones: hacer otro scirpt en Jest que haga validaciones para estas cadenas de texto (minimo 20 pruebas), además de poner pruebas que validen que no acepta numeros.
/*console.log(laPalabraMasLarga("Un lenguaje de programación es de bajo nivel cuando requiere que prestes atencion a lo irrelevante"));
console.log(laPalabraMasLarga("No te preocupes si no funciona bien. Si todo lo que hizo lo hiciera, estarías sin trabajo."));
console.log(laPalabraMasLarga("En teoría, la teoría y la práctica son los mismos. En la práctica, no es"));
console.log(laPalabraMasLarga("En mi máquina si funciona"));
console.log(laPalabraMasLarga("No me importa si funciona en su máquina! No me envían su máquina!"));*/