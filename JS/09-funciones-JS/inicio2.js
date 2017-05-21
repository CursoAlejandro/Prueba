

//btn1.onClick = function  (a, b) {return +a + +b} 

    


function sumarDobles  (a=0, b=0){
    a.valor *= 2
    b.valor *= 2
    return a.valor+b.valor;
}

function main () {  //2

    let oNum1 = { valor : 0}
    let oNum2 = { valor : 0}


    oNum1.valor = Number(prompt("Dime tu numnero", 12));
    oNum2.valor = Number(prompt("Dime otro", 23));

    console.log(oNum1)
    console.log(oNum2)

    console.log(sumarDobles(oNum1, oNum2));

    console.log(oNum1)
    console.log(oNum2)

}

main();


// Hacer funcion que calcule la media n numeros