// Acceso al Node Btn1 del DOM
// Constantes

const SALUDO = 'Hello ';

//Variables y tipos de datos

//Number
//String
//Boolean
var esBueno =true;

//Undefined
var queSoy;

//Null (Object)
var aDatos = {}

// Object
var oDatos = {
    nombre:"Pepe",
    apellido:"Perez",
    edad:23,
    pais:'Suiza',
    algo :undefined,
    esVaron: true,
    direccion : {
        calle:"",
        numero:"",
        poblacion:"",
        cp:"",
        pais:""
    }
}

console.dir(oNombre)
console.dir(oDatos)

var oBtn1 = document.querySelector("#btn1");

var oNombre = document.querySelector('#nombre');

//Acceso al Node respuesta del DOM
var oRespuesta = document.querySelector('#respuesta');


oDatos.oDireccion.calle = "C/ Pez";
function saludar () {
let sSaludo = SALUDO
sSaludo += oNombre.value;
oRespuesta.innerHTML = "<b>" + sSaludo + "</b>";
}

oBtn1.onclick = saludar;





console.dir(oNombre)
console.dir(typeof oDatos)