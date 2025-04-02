/*Declara una función que acepte un nombre como parámetro 
y devuelva el número de palabras que tiene el nombre. 
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/

//solución 1

function countWords(name) {
    if (typeof name !== 'string' || name.trim() === '') {
        return 0; 
    }
    const words = name.trim().split(/\s+/);
    return words.length; 
}

console.log(countWords('Antonio Alberto Jesus'));

//Solución 2

/*function countWords(name){
    const words = name.trim().match(/\s+/g);
    return words ? words.length : 0;
}
 
console.log(countWords('Antonio Alberto Jesus'));*/






