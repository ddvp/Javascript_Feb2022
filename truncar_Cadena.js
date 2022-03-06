function truncateString(str, num) {

    if (str.length <= num) {
        //Agrega el código que hace falta
        return str 
    }
    return str.slice(0,num)+ '...'
}

module.exports = truncateString ;