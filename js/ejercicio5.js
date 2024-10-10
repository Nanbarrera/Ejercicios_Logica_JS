// Ejercicio 5
/*Comparaciones: Escribe un programa que compare dos números y diga cuál
es mayor o si son iguales.*/

let numero1 = parseFloat(prompt("Ingresa el primer numero")) ;
let numero2 = parseFloat(prompt("Ingresa el segundo numero")) ;

if (numero1 > numero2){
    console.log("El numero mayor es: " + numero1)
}else if (numero1 == numero2){
    console.log("El numero es igual: " + numero2)
}else{
    console.log("El numero es mayor: " + numero2)
}