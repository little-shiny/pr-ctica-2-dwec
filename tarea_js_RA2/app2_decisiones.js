// Apartado 1

// Nota a comprobar
let nota = 7;

// comprobacion del rango de la nota
if (nota < 5) {
    console.log("Insuficiente");
} else if (nota >= 5 && nota < 6) {
    console.log("Suficiente");
} else if (nota >= 6 && nota < 7) {
    console.log("Bien");
} else if (nota >= 7 && nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}

//Apartado 2
let notaTexto = "8";

// conversion a numero
let notaNumero = Number(notaTexto);

// comprobacion de los tipos de las variables
console.log("Tipo de notaTexto:", typeof notaTexto);
console.log("Tipo de notaNumero:", typeof notaNumero);


//Apartado 3
let rolUsuario = "admin";

switch (rolUsuario) {
    case "admin":
        console.log("Acceso completo");
        break;

    case "usuario":
        console.log("Acceso limitado");
        break;

    case "invitado":
        console.log("Solo lectura");
        break;

    default:
        // Si el rol no coincide con ninguno de los anteriores
        console.log("Rol no reconocido");
        break;
}
