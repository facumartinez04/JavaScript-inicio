
function ejercicio19(){
    let palabras = ["Sol", "Luna", "Estrella", "Cielo", "Nube"];

    for (let i = 0; i < palabras.length; i++) {
        alert(palabras[i]);
    }

        

}

function ejercicio20(){
    let palabras = ["sol", "luna", "estrella", "cielo", "nube"];

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let palabraModificada = palabra.substring(0, 1).toUpperCase() + palabra.substring(1).toLowerCase();
        alert(palabraModificada);
    }
}

function ejercicio21(){
    let palabras = ["sol", "luna", "estrella", "cielo", "nube"];
    let sentence = "";

    for (let i = 0; i < palabras.length; i++) {
        sentence += palabras[i];

        if (i < palabras.length - 1) {
            sentence += " ";
        }
    }

    alert(sentence);
}


function ejercicio22(){
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(i);
    }

    console.log("Array final:", numeros);
}



ejercicio19()
ejercicio20()
ejercicio21()
ejercicio22()