

function ejercicio17(){
    let numeroAleatorio = Math.random();

    if (numeroAleatorio >= 0.5) {
        alert("Greater than 0.5");
    } else {
        alert("Lower than 0.5");
    }

    console.log("Número generado:", numeroAleatorio);
}


// EJERCICIO 18

function ejercicio18(){
    let age = parseInt(window.prompt("Ingresa tu edad (0 a 100):"));

    if (age < 2) {
        alert("Bebé");
    } else if (age >= 2 && age <= 12) {
        alert("Niño");
    } else if (age >= 13 && age <= 19) {
        alert("Adolescente");
    } else if (age >= 20 && age <= 30) {
        alert("Joven");
    } else if (age >= 31 && age <= 60) {
        alert("Adulto");
    } else if (age >= 61 && age <= 75) {
        alert("Adulto mayor");
    } else if (age > 75 && age <= 100) {
        alert("Anciano");
    } else {
        alert("Edad inválida. Ingresa un número entre 0 y 100.");
    }
}

ejercicio18()