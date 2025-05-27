function ejercicio23(){
    function suma(a, b) {
    return a + b;
    }

    let resultado = suma(5, 7);

    console.log("El resultado de la suma es:", resultado);  
}


function ejercicio24(){
    function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Error: Uno de los parámetros no es un número.");
        return NaN;
    }
        return a + b;
    }

    let resultado = suma(5, "hola");  
    console.log("Resultado:", resultado);
}


function ejercicio25(){
    function validateInteger(numero) {
        return Number.isInteger(numero);
    }

    console.log(validateInteger(5));    
    console.log(validateInteger(3.14)); 
    console.log(validateInteger("10"));   
}

function ejercicio26(){
    function validateInteger(numero) {
        return Number.isInteger(numero);
    }

    function suma(a, b) {
        if (isNaN(a) || isNaN(b)) {
            alert("Error: Uno de los parámetros no es un número.");
            return NaN;
        }

        if (!validateInteger(a)) {
            alert("El primer número no es un entero. Se redondeará.");
            a = Math.round(a);
        }

        if (!validateInteger(b)) {
            alert("El segundo número no es un entero. Se redondeará.");
            b = Math.round(b);
        }

        return a + b;
    }

    let resultado = suma(5.7, 3.3);
    console.log("Resultado:", resultado);
}

function ejercicio27(a, b) {
    function validarYRedondearEntero(numero, nombreParametro) {
        if (!Number.isInteger(numero)) {
            alert(`El ${nombreParametro} no es un entero. Se redondeará.`);
            return Math.round(numero);
        }
        return numero;
    }

    if (isNaN(a) || isNaN(b)) {
        alert("Error: Uno de los parámetros no es un número.");
        return NaN;
    }

    a = validarYRedondearEntero(a, "primer número");
    b = validarYRedondearEntero(b, "segundo número");

    let resultado = a + b;
    console.log("Resultado:", resultado);
    return resultado;
}


ejercicio23()
ejercicio24()
ejercicio25()
ejercicio26()
ejercicio27(4.8, 2.2);
