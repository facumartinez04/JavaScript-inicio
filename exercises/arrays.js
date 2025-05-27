// EJERCICIO 10

function ejercicio10(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(array[4])
    console.log(array[10])
}


// EJERCICIO 11

function ejercicio11(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    array.sort();
    console.log(array)

}


// EJERCICIO 12

function ejercicio12(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    array.unshift("Lunes");

    array.push("Domingo");

    console.log(array)
}


// EJERCICIO 13

function ejercicio13(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    array.shift();
    array.pop();
    console.log(array)
}

// EJERCICIO 14

function ejercicio14(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    array.reverse();

    console.log(array)


}



// EJERCICIO 15

function ejercicio15(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    let resultado = array.join(" - ");
    console.log(resultado)
}


// EJERCICIO 16

function ejercicio16(){
    let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    let resultado = array.slice(4, 11);
    console.log(resultado)
}



ejercicio10()
ejercicio11()
ejercicio12()
ejercicio13()
ejercicio14()
ejercicio15()
ejercicio16()