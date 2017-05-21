
var nNumeros=[1, 3, 6]

function media() {
   
    var suma = nNumeros[0] + nNumeros[1] + nNumeros[2];

    var dividir =parseFloat (suma / (nNumeros.length)) ;
    return dividir;
    
    
}

media(); /*hi*/
document.write(media());