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
export function menuBienvenida(): void {
  let opcionMenuBienvenida: number = Number(8);
  /* MOSTRAR NOMBRE */
  while (opcionMenuBienvenida != Number(0)) {
    console.clear();
    console.log("------------------------- ");
    console.log("BIENVENIDOS A CAMERUNSOFT");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ver Proveedores");
    console.log("2 - Ver Sucursales");
    console.log(" ");
    console.log("------------------------- ");
    console.log("0 - Salir");
    console.log("------------------------- ");
    opcionMenuBienvenida = Number(
      ReadlineSync.question("Ingrese una opcion: ")
    );

    switch (opcionMenuBienvenida) {
      case 1:
        menuProveedores();
        break;
      case 2:
        menuSucursales();
        break;
      case 0:
        console.log("FIN DEL PROGRAMA");
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuProveedores(): void {
  let opcionMenuProveedores: number = Number(8);
  while (opcionMenuProveedores != Number(9)) {
    console.clear();
    console.log("------------------------- ");
    console.log("PROVEEDORES");
    console.log("------------------------- ");
    /* LISTAR PROVEEDORES */
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Modificar proveedor");
    console.log("2 - Borrar proveedor");
    console.log("3 - Nuevo proveedor");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuProveedores = Number(
      ReadlineSync.question("Ingrese una opcion: ")
    );

    switch (opcionMenuProveedores) {
      case 1:
        menuModificarProveedor();
        break;
      case 2:
        menuBorrarProveedor();
        break;
      case 3:
        menuNuevoProveedor();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuModificarProveedor(): void {
  console.clear();
  /* LISTAR PROVEEDORES */
  let IDaCambiar: number = Number(
    ReadlineSync.question(
      "Ingrese el id del proveedor que desea cambiar(0 para cancelar operacion): "
    )
  );
  if (IDaCambiar === 0) {
    console.log("Modificacion cancelada");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    let NvoProveedor: Proveedor;
    NvoProveedor = new Proveedor(IDaCambiar, " ", 1);
    NvoProveedor.setNombre(
      ReadlineSync.question(
        "Nuevo nombre para el proveedor, si no cambia, ingrese el mismo: "
      )
    );
  }
}
function menuBorrarProveedor(): void {}
function menuNuevoProveedor(): void {}

function menuSucursales(): void {
  let opcionMenuSucursal: number = Number(8);
  while (opcionMenuSucursal != Number(9)) {
    console.clear();
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
        menuModificarSucursal();
        break;
      case 3:
        menuBorrarSucursal();
        break;
      case 4:
        menuNuevaSucursal();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}
function menuModificarSucursal(): void {}
function menuBorrarSucursal(): void {}
function menuNuevaSucursal(): void {}

function menuEnSucursal(): void {
  let opcionMenuEnSucursal: number = Number(8);
  while (opcionMenuEnSucursal != Number(9)) {
    console.clear();
    console.log("------------------------- ");
    /* MOSTRAR ID DIRECCION Y TELEFONO */
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Listar clientes");
    console.log("2 - Listar pacientes");
    console.log("3 - Ingresar a cliente");
    console.log("4 - Borrar cliente");
    console.log("5 - Nuevo cliente");
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
        menuEnCliente();
        break;
      case 4:
        menuBorrarCliente();
        break;
      case 5:
        menuNuevoCliente();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuBorrarCliente(): void {}
function menuNuevoCliente(): void {}

function menuEnCliente(): void {
  let opcionMenuEnCliente: number = Number(8);
  while (opcionMenuEnCliente != Number(9)) {
    console.clear();
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
        registrarVisita();
        break;
      case 2:
        menuModificarCliente();
        break;
      case 3:
        /* LISTAR PACIENTES */
        break;
      case 4:
        menuModificarPaciente();
        break;
      case 5:
        menuBorrarPaciente();
        break;
      case 6:
        menuNuevoPaciente();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function registrarVisita(): void {}
function menuModificarCliente(): void {}
function menuModificarPaciente(): void {}
function menuBorrarPaciente(): void {}
function menuNuevoPaciente(): void {}

//INICIO DEL PROGRAMA

/* CARGA DE BBDD */

menuBienvenida();

/* GUARDADO DE BBDD */
