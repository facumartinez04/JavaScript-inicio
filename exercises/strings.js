
function ejercicio4(){
    let texto = "beneficiarios"
    texto.toUpperCase()

    console.log(texto)
}



function ejercicio5(){
    let texto = "beneficiarios"
    let textoreducido = texto.substring(0,5)
    console.log(textoreducido)
}


function ejercicio6(){
    let texto = "beneficiarios"
    let textoreducido = texto.substring(texto.length - 3);
    console.log(textoreducido)
}


function ejercicio7(){
    let texto = "beneficiarios"
    let textoFormateado = texto.substring(0, 1).toUpperCase() + texto.substring(1).toLowerCase();
    console.log(textoFormateado)
}


function ejercicio8(){
    let texto = "hola como estas"
    let textoFormateado = texto.indexOf(" ");
    console.log(textoFormateado)
}



function ejercicio9(){
    let texto = "clase nueve";

    let espacio = texto.indexOf(" ");

    let palabra1 = texto.substring(0, espacio);
    let palabra2 = texto.substring(espacio + 1);

    let palabra1Formateada = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase();
    let palabra2Formateada = palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();

    let resultado = palabra1Formateada + " " + palabra2Formateada;
    console.log(resultado)
}


ejercicio4()
ejercicio5()
ejercicio6()
ejercicio7()
ejercicio8()
ejercicio9()