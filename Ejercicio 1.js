/*Declara una función que acepte una palabra como parámetro y 
la devuelva con todos sus caracteres en mayúsculas y separados por espacios.
 Ejemplo: Para "Ana" devolverá "A N A".*/


 // solucion 1

function accept(palabra){
    const upperword = palabra.toUppercase();
    const arr = upperword.split(''); 
    const space = arr.join(' ');
    return space; 
}

console.log(accept('Ana')); 


// solucion 2 

function accept(palabra) {
    if (typeof palabra !== 'string') {
        return ''; 
    }
    let result = '';
    for (let i = 0; i < palabra.length; i++) {
        result += palabra[i].toUpperCase();
        if (i < palabra.length -1) {
            result += ' ';
        }

    }
    return result;
}

console.log(accept('Ana')); 






