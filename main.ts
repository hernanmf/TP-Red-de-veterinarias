import Cliente from "./cliente";
import Paciente from "./Paciente";
import Proveedor from "./Proveedor";
import Sucursal from "./sucursales";
import Veterinarias from "./veterinarias";
import generadorDeID from "./generadorId";

/* import * as fs from "fs"; */
import * as ReadFileSync from "readline-sync";
import * as ReadlineSync from "readline-sync";

/* menues en funcion */
function menuBienvenida(): void {
  let opcionMenuBienvenida: number = Number(8);
  /* MOSTRAR NOMBRE */
  while (opcionMenuBienvenida != Number(0)) {
    console.log("------------------------- ");
    console.log("BIENVENIDOS A CAMERUNSOFT");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ver Sucursales");
    console.log("2 - Ver Proveedores");
    console.log(" ");
    console.log("------------------------- ");
    console.log("0 - Salir");
    console.log("------------------------- ");
    opcionMenuBienvenida = Number(
      ReadlineSync.question("Ingrese una opcion: ")
    );

    switch (opcionMenuBienvenida) {
      case 1:
        menuSucursales();
        break;
      case 2:
        menuProveedores();
        break;
      default:
        console.log("FIN DEL PROGRAMA");
        break;
    }
  }
}

function menuProveedores(): void {
  let opcionMenuProveedores: number = Number(8);
  while (opcionMenuProveedores != Number(9)) {
    console.log("------------------------- ");
    /* LISTAR PROVEEDORES */
    console.log("------------------------- ");
    console.log("PROVEEDORES");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ingresar a proveedor");
    console.log("2 - Modificar proveedor");
    console.log("3 - Borrar proveedor");
    console.log("4 - Nuevo proveedor");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuProveedores = Number(
      ReadlineSync.question("Ingrese una opcion: ")
    );

    switch (opcionMenuProveedores) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }
}

function menuSucursales(): void {
  let opcionMenuSucursal: number = Number(8);
  while (opcionMenuSucursal != Number(9)) {
    console.log("------------------------- ");
    /* LISTAR SUCURSALES */
    console.log("------------------------- ");
    console.log("SUCURSALES");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ingresar a sucursal");
    console.log("2 - Modificar sucursal");
    console.log("3 - Borrar sucursal");
    console.log("4 - Nueva sucursal");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuSucursal = Number(ReadlineSync.question("Ingrese una opcion: "));

    switch (opcionMenuSucursal) {
      case 1:
        menuEnSucursal();
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }
}

function menuEnSucursal(): void {
  let opcionMenuEnSucursal: number = Number(8);
  while (opcionMenuEnSucursal != Number(9)) {
    console.log("------------------------- ");
    /* MOSTRAR ID DIRECCION Y TELEFONO */
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Listar clientes");
    console.log("2 - Listar pacientes");
    console.log("3 - Ingresar a cliente");
    console.log("5 - Borrar cliente");
    console.log("6 - Nuevo cliente");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuEnSucursal = Number(
      ReadlineSync.question("Ingrese una opcion: ")
    );

    switch (opcionMenuEnSucursal) {
      case 1:
        /* LISTAR CLIENTES */
        break;
      case 2:
        /* LISTAR PACIENTES */
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
        break;
    }
  }
}

function menuEnCliente(): void {
  let opcionMenuEnCliente: number = Number(8);
  while (opcionMenuEnCliente != Number(9)) {
    console.log("------------------------- ");
    /* MOSTRAR ID NOMBRE TELEFONO ESVIP? VISITAS*/
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Registrar visita");
    console.log("2 - Modificar datos");
    console.log("3 - Listar pacientes");
    console.log("4 - Modificar paciente");
    console.log("5 - Borrar paciente");
    console.log("6 - Nuevo paciente");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuEnCliente = Number(ReadlineSync.question("Ingrese una opcion: "));

    switch (opcionMenuEnCliente) {
      case 1:
        break;
      case 2:
        /* LISTAR PACIENTES */
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
        break;
    }
  }
}

//INICIO DEL PROGRAMA
menuBienvenida();
