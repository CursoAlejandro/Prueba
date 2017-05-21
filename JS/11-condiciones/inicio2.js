

function sumar (a, b){
   
    return +a + +b;
}

function restar (a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function main () {  //2

    let oNum1 = { valor : 0}
    let oNum2 = { valor : 0}
    let deseo = { valor: 0}


    oNum1.valor = Number(prompt("Dime tu primer numero"));
    oNum2.valor = Number(prompt("Dime el segundo"));
    deseo.valor = Number(prompt("Que deseas hacer \n 1.Sumar \n 2.Restar \n 3.Multiplicar \n 4. Not Found"));

   
   if(deseo.valor==1){

     document.write(sumar(oNum1.valor, oNum2.valor));
   }

   else if (deseo.valor==2){

    document.write(restar(oNum1.valor, oNum2.valor));
   }

   else if (deseo.valor==3){

    
    document.write(multiplicar());
    
   }

   else
   {
       alert ("Sin numero")
   }


}

main();


