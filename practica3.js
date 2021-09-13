/* Crear un array que contenga números del 1 al 10. 
Retornar un nuevo array que contenga todos los números multiplicados por dos */

let numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(i+1)
    
}
console.log (numeros);

let numeros2 = numeros.map (function(numero){
    console.log(numero);
    return numero * 2;
})
console.log (numeros2);

/* Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5
 */

let numerosMayores = numeros2.filter (numero => numero > 5)
console.log (numerosMayores);

/* Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10 */

let numerosMayoresADiez = numeros2.find ( numero => numero>10)
console.log (numerosMayoresADiez);