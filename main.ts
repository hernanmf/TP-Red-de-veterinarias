import Cliente from "./cliente";
import Paciente from "./Paciente";
import Proveedor from "./Proveedor";
import Sucursal from "./sucursales";
import Veterinarias from "./veterinarias";
import generadorDeID from "./generadorId";

/* import * as fs from "fs"; */
import * as ReadFileSync from "readline-sync";
import * as ReadlineSync from "readline-sync";

function menuBienvenida(): void {
  let opcion: number = 8;
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
  } else if (opcion === 2) {
    console.log("elegiste opcion 2!!");
  } else {
    console.log("chau!!");
  }
}

//INICIO DEL PROGRAMA
menuBienvenida();
