// Ejercicios Practica Formativa 3

// -------------------- Ejercicio 1------------------------
function calcularAreaRectangulo (longitud, ancho) {
    if(longitud <=0 || ancho <=0){
        return "Los valores ingresados de longitud y ancho son invalidos. Deben ser un valor mayor a 0"
    }
    return longitud * ancho;
}

/*  Explicacion de ejercicio 1: Este ejercicio lo pense recordando como se calcula el area de un rectangulo para tener en 
cuenta los datos que necesitaria pasarle a la funcion. Tambien pense en que no es valido que la longitud o ancho del rectangulo sea
0 o un numero negativo.*/

// -------------------- Ejercicio 2------------------------
function contadorPalabrasEnCadena (cadena){
    cadena = cadena.trim();
    let contador = 0
    let indice = 0

    if (cadena.length<=0){
        return "La cadena ingresada es vacia. No tiene cantidad de palabras"
    }
    else {
        while (indice<cadena.length){
            if(cadena[indice]==' '){
                contador += 1
            }
            indice++
        }
    }
    return contador +1
}

/* Explicacion de ejercicio 2:  Primero, para evitar que la cadena tenga espacios al principio o al final, agregue trim().
Luego pense en ir contando cada caracter de la cadena hasta que se encuentre un caracter igual al espacio, 
en ese momento suma en el contador una palabra. Esto repetirlo varias veces hasta que se haya terminado la cadena, es decir teniendo 
en cuenta su longitud.
Contempla el caso que la cadena ingresada sea vacia, en ese caso retorna un mensaje
Luego de varias pruebas me di cuenta que no estaba contando la ultima palabra. O si era una sola como no encontraba espacio no la contaba,
por eso sume uno al contador.
*/

// -------------------- Ejercicio 3------------------------
function invertirCadena (cadena){
    cadenaInvertida = ""
    let indice = cadena.length-1

    if (cadena.length<=0){
        return "La cadena ingresada es vacia."
    }
    else {
        while (indice>=0){
            cadenaInvertida+=cadena[indice]
            indice--
        }
    }
    return cadenaInvertida
}

/* Explicacion de ejercicio 3: Para este ejercicio pense primero teniendo la longitud de la cadena, y voy a invertir como voy leyendo la
misma, para leerla de atras hacia adelante e ir guardando cada caracter en una variable auxiliar. Esto hasta que llega a la posicion 0.
Contempla el caso que la cadena ingresada sea vacia, en ese caso retorna un mensaje*/

// -------------------- Ejercicio 4------------------------
function encontrarPalindromo (palabra){
    let mitad = 0
    let longitud = palabra.length
    palabra = palabra.toLowerCase().trim()
    let primeraParte = ""
    let segundaParte = ""

    if (longitud == 0) {
        return "La palabra está vacía.";
    }

    if (longitud%2 == 0){ //Si la longitud es par
        mitad = longitud / 2;
        primeraParte = palabra.slice(0, mitad);
        segundaParte = invertirCadena(palabra.slice(mitad))
    }
    else {
        mitad = Math.floor(longitud/2);
        primeraParte = palabra.slice(0, mitad)
        segundaParte = invertirCadena(palabra.slice(mitad+1)) 
    }
    return primeraParte ===segundaParte
}

/* Explicacion de ejercicio 4: Para este ejercicio primero pense en quitar los espacios del principio y final de la cadena, tambien
en convertirla en minuscula para despues facilitar la comparacion entre caracteres.
Luego, si la longitud de la cadena es par entonces la divide en dos, con la funcion slice toma la primera parte y luego pense en 
utilizar la funcion del ejercicio anterior para invertir la segunda parte de la cadena. Por ultimo en este caso, compara ambas partes.
Sino, si es de longitud impar, el proceso es similar, solamente que la segunda parte se toma desde la mitad de la misma +1.
Por ultimo si ambas partes son iguales retorna true, sino false. */

// -------------------- Ejercicio 5------------------------
function calcularEdadPerro (){
    let edadPerro = prompt("Ingresa la edad de tu perro en años: ")

    if (isNaN(edadPerro) || edadPerro < 0) {
        return "Debe ingresar un número válido mayor a 0."
    
    } else {
        edadPerro = edadPerro * 7;
    }
    return edadPerro
}

/* Explicacion de ejercicio 5: Primero para este ejercicio pense solicitarle al usuario la edad de su perro. Verifica que haya ingresado
algo sino muestra un mensaje.
En el caso que ingrese correctamente una edad, entonces calcula la edad del perro por 7 años que son los humanos.*/

// -------------------- Pruebas de ejercicios------------------------
//Ejercicio 1
console.log("-------Prueba ejercicio 1-------")
console.log ("El area de un rectangulo con longitud 5 y ancho 2 es igual a: "+ calcularAreaRectangulo(5,2))
console.log (calcularAreaRectangulo(5, -1))
console.log (calcularAreaRectangulo(-5, 10))
console.log (calcularAreaRectangulo(0, -2))

//Ejercicio 2
console.log("-------Prueba ejercicio 2-------")
console.log(contadorPalabrasEnCadena(""))
console.log(contadorPalabrasEnCadena("hola"))
console.log(contadorPalabrasEnCadena("hola como estas?"))

//Ejercicio 3
console.log("-------Prueba ejercicio 3-------")
console.log(invertirCadena(""))
console.log(invertirCadena("hola"))
console.log(invertirCadena("hola como estas?"))

//Ejercicio 4
console.log("-------Prueba ejercicio 4-------")
if(encontrarPalindromo("neuquen")){
    console.log("La palabra Neuquen es palindromo")
}
else {
    console.log("La palabra Neuquen no es palindromo")
}

if(encontrarPalindromo("hola")){
    console.log("La palabra hola es palindromo")
}
else {
    console.log("La palabra hola no es palindromo")
}

console.log (encontrarPalindromo(""))

if(encontrarPalindromo("444344")){
    console.log("La palabra 444344 es palindromo")
}
else {
    console.log("La palabra 444344 no es palindromo")
}

//Ejercicio 5
console.log("-------Prueba ejercicio 5-------") 
let edad = calcularEdadPerro()
console.log('Tu perro tiene '+edad+ " años humanos")