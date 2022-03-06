function isAnagram(str1,str2){
    return formatStr(str1) === formatStr(str2);
}
//Function ayuda
function formatStr(str){
    return str
        .toLowerCase()
        .replace(/[^//w]/g,'')
        .split('') 
        .sort() //ordenar
        .join(''); //juntar

}

module.exports = isAnagram;