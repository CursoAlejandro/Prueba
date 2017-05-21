// Acceso al Node Btn1 del DOM
// Constantes

const SALUDO = 'Hello ';


var oBtn1 = document.querySelector("#btn1");

var oNombre = document.querySelector('#nombre');

//Accesp al Node respuesta del DOM
var oRespuesta = document.querySelector('#respuesta');



function saludar () {
    let sNombre = oNombre.value;
    alert(SALUDO + sNombre);
}

oBtn1.onclick = saludar;




console.dir(oBtn1);
console.dir(oNombre)
console.dir(oRespuesta)


