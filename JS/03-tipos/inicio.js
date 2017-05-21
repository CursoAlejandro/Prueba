
//
//Declaracion de una funcion
function saludar () { //3
    let saludo = "Hola";
    console.log(saludo);
}

function sumarDosNumeros (a,b){
    return a+b;
}

function main () {  //2
    var sNumero = prompt("Dime tu numnero", "Pepe");
    var sNumero2 = prompt("Dime otro")

    saludar();
    sumarDosNumeros(sNumero, sNumero2);
    saludar();

}

main();  //1


