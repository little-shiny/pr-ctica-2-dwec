
// apartado 1

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// Apartado 2
// array varios números
let numeros = [3, 8, 15, 2];

let suma = 0;
let indice = 0;

// El while se repite mientras el índice sea menor que la longitud del array 
while (indice < numeros.length) {
    suma = suma + numeros[indice];

    indice++;
}

console.log("La suma total es:", suma);

// Apartado 3
let contador = 0;

// El do...while ejecuta primero el código y después comprueba la condicion
do {
    console.log("Valor del contador:", contador);

    // Aumento el contador en cada iteración
    contador++;

} while (contador < 5);
