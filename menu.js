"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
function menuBienvenida() {
    var opcion = 8;
    while (opcion != 0) {
        console.log("Bienvenidos a CamerunSoft");
        console.log(" ");
        console.log("1 - Ver Sucursales");
        console.log("2 - Ver Proveedores");
        console.log(" ");
        console.log("0 - Salir");
        opcion = Number(ReadlineSync.question("Ingrese una opcion: "));
    }
    if (opcion === 1) {
        console.log("elegiste opcion 1!!");
    }
    else if (opcion === 2) {
        console.log("elegiste opcion 2!!");
    }
    else {
        console.log("chau!!");
    }
}
//INICIO DEL PROGRAMA
menuBienvenida();
