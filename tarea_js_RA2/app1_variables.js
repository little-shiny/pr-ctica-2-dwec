
// Apartado 1
// uso let porque estos valores pueden cambiar 
let edad = 19;
let nombre = "Lucía";
let esMayorDeEdad = true;

// Uso const porque el IVA esa cosntante que no va a cambiar
const IVA = 0.21;

// valores por consola
console.log("Edad:", edad);
console.log("Nombre:", nombre);
console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("IVA:", IVA);


//Apartado 2

// Creo dos variables numéricas para realizar las operaciones
let numero1 = 4;
let numero2 = 3;

console.log("Suma =", numero1 + numero2);

console.log("Resta =", numero1 - numero2);

console.log("Multiplicación =", numero1 * numero2);

console.log("División =", numero1 / numero2);


// precio final de un producto aplicando el IVA
let precioSinIVA = 100;

let precioConIVA = precioSinIVA * (1 + IVA);

console.log("Precio sin IVA =", precioSinIVA);
console.log("Precio con IVA =", precioConIVA);


let mensajeCompleto = "Hola " + nombre +
    ", tu precio final es " + precioConIVA;

console.log(mensajeCompleto);


// apartado 3
// Esta variable se puede utilizar en todo este ámbito.
let contador = 0;

if (true) {
    // este contador no es el anterior, por que va dentro del if
    let contador = 99;

    console.log("Contador dentro del if =", contador);
}

// Aquí se muestra el contador que está fuera del if.
// El contador declarado dentro del bloque no es accesible aquí.
console.log("Contador fuera del if =", contador);

// apartado 4

let numeroComoTexto = "42";

let numeroConvertido = Number(numeroComoTexto);


console.log("Tipo antes de convertir:", typeof numeroComoTexto);
console.log("Tipo después de convertir:", typeof numeroConvertido);

console.log("Sin convertir:", "42" + 1);
console.log("Convirtiendo a número:", Number("42") + 1);
