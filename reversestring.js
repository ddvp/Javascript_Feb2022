function reverseString(str) {
    // usar split para regresar el metodo a un nuevo array
    var splitString = str.split(""); 
    // ["h", "e", "l", "l", "o"]
    // usar el metodo reverse() para crear un nuevo array
    var reverseArray = splitString.reverse(); 
    // ["o", "l", "l", "e", "h"]
    // usar el metodo join para juntas todos los elementos del array en un string
    var joinArray = reverseArray.join(""); 
    // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    //regresar el reverso del string
    return joinArray; // "olleh"
}
 
reverseString("hello");