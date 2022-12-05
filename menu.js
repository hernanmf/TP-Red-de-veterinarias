"use strict";
exports.__esModule = true;
exports.menuBienvenida = void 0;
var Proveedor_1 = require("./Proveedor");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var ReadlineSync = require("readline-sync");
var veterinarias_1 = require("./veterinarias");
//Cargamos los arreglos clientes, pacientes y proveedores--->
var datosSucursales = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/sucursales.txt");
var arregloSucursales = [];
var datosClientes = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/clientes.txt");
var arregloClientes = [];
var datosPacientes = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/paciente.txt");
var arregloPacientes = [];
var datosProveedor = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/proveedores.txt");
var arregloProveedor = [];
var arregloHistClinica = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearCliente)(datosClientes.getArregloString()[i], arregloClientes, arregloPacientes);
}
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearPaciente)(datosPacientes.getArregloString()[i], arregloPacientes, arregloHistClinica);
}
for (var i = 0; i < datosProveedor.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearProveedor)(datosProveedor.getArregloString()[i], arregloProveedor);
}
for (var i = 0; i < datosSucursales.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearSucursal)(datosSucursales.getArregloString()[i], arregloSucursales);
}
var veterinariaInstanciada = new veterinarias_1["default"]("Camerun Soft", arregloSucursales, arregloProveedor);
var sucursalInstanciada;
var clienteInstanciado;
/* menues en funcion */
function menuBienvenida() {
    var opcionMenuBienvenida = Number(8);
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
        opcionMenuBienvenida = Number(ReadlineSync.question("Ingrese una opcion: "));
        switch (opcionMenuBienvenida) {
            case 1:
                console.clear();
                menuProveedores();
                break;
            case 2:
                console.clear();
                menuSucursales();
                break;
            case 0:
                console.clear();
                console.log("FIN DEL PROGRAMA");
                break;
            default:
                console.log("Opcion erronea");
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
exports.menuBienvenida = menuBienvenida;
function menuProveedores() {
    var opcionMenuProveedores = Number(8);
    while (opcionMenuProveedores != Number(9)) {
        /* ß */
        console.log("------------------------- ");
        console.log("PROVEEDORES");
        console.log("------------------------- ");
        console.log(" ");
        mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
        console.log("------------------------- ");
        console.log(" ");
        console.log("1 - Modificar proveedor");
        console.log("2 - Borrar proveedor");
        console.log("3 - Nuevo proveedor");
        console.log(" ");
        console.log("------------------------- ");
        console.log("9 - Atras");
        console.log("------------------------- ");
        opcionMenuProveedores = Number(ReadlineSync.question("Ingrese una opcion: "));
        console.clear;
        switch (opcionMenuProveedores) {
            case 1:
                console.clear();
                mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
                menuModificarProveedor();
                break;
            case 2:
                console.clear();
                mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
                menuBorrarProveedor();
                break;
            case 3:
                menuNuevoProveedor();
                break;
            default:
                console.log("Opcion erronea");
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
function menuModificarProveedor() {
    var IDaCambiar = Number(ReadlineSync.question("Ingrese el id del proveedor que desea cambiar(0 para cancelar operacion): "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
        setTimeout(function () {
            console.log(" ");
        }, 2000);
    }
    else {
        var NvoProveedor = void 0;
        var NvoNombre = ReadlineSync.question("Nuevo nombre para el proveedor, si no cambia, ingrese el mismo: ");
        var nvoTelefono = Number(ReadlineSync.questionInt("Nuevo telefono para el proveedor, si no cambia, ingrese el mismo: "));
        NvoProveedor = new Proveedor_1["default"](IDaCambiar, NvoNombre, nvoTelefono);
        veterinariaInstanciada.setProveedor(IDaCambiar, NvoProveedor);
    }
}
function mostrarListaProveedores(lista) {
    console.log("ID Proveedor / Nombre / Telefono");
    console.log(" ");
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i].getIDProveedor() +
            " / " +
            lista[i].getNombre() +
            " / " +
            lista[i].getTelefono());
    }
    console.log(" ");
}
function menuBorrarProveedor() { }
function menuNuevoProveedor() { }
function menuSucursales() {
    var opcionMenuSucursal = Number(8);
    while (opcionMenuSucursal != Number(9)) {
        console.clear();
        console.log("------------------------- ");
        console.log("SUCURSALES");
        console.log("------------------------- ");
        console.log(" ");
        mostrarListaSucursales(veterinariaInstanciada.listarSucursal());
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
                menuEntrarASucursal();
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
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
function menuEntrarASucursal() {
    var IDSucursalAInstanciar = Number(ReadlineSync.question("Ingrese el id de la sucursal a la que desea ingresar(0 para cancelar operacion): "));
    if (IDSucursalAInstanciar != 0) {
        var i = 0;
        while (i < veterinariaInstanciada.listarSucursal.length &&
            veterinariaInstanciada.listarSucursal[i].getIDsucursal() !=
                IDSucursalAInstanciar) {
            i++;
        }
        if (i < veterinariaInstanciada.listarSucursal.length) {
            sucursalInstanciada = veterinariaInstanciada.listarSucursal[i];
            menuEnSucursal();
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
    }
}
function menuModificarSucursal() { }
function menuBorrarSucursal() { }
function menuNuevaSucursal() { }
function mostrarListaSucursales(lista) {
    console.log("ID Sucursal / Direccion / Telefono");
    console.log(" ");
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i].getIDsucursal() +
            " / " +
            lista[i].getDireccion() +
            " / " +
            lista[i].getTelefono());
    }
    console.log(" ");
}
function menuEnSucursal() {
    var opcionMenuEnSucursal = Number(8);
    while (opcionMenuEnSucursal != Number(9)) {
        console.clear();
        console.log("------------------------- ");
        console.log("ID Sucursal: " +
            sucursalInstanciada.getIDsucursal() +
            " Direccion: " +
            sucursalInstanciada.getDireccion() +
            " Telefono: " +
            sucursalInstanciada.getTelefono());
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
        opcionMenuEnSucursal = Number(ReadlineSync.question("Ingrese una opcion: "));
        switch (opcionMenuEnSucursal) {
            case 1:
                /*mostrarListaClientes(veterinariaInstanciada.listarClientes()); */
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
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
function mostrarListaClientes(lista) {
    console.log("ID Cliente / Nombre / Telefono / Cantidad de visitas / ¿Es vip?");
    console.log(" ");
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i].getIdCliente() +
            " / " +
            lista[i].getNombre() +
            " / " +
            lista[i].getTelefono() +
            " / " +
            lista[i].getCantidadVisitas() +
            " / " +
            lista[i].getEsVip());
    }
    console.log(" ");
}
function menuBorrarCliente() { }
function menuNuevoCliente() { }
function menuEnCliente() {
    var opcionMenuEnCliente = Number(8);
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
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
function registrarVisita() { }
function menuModificarCliente() { }
function menuModificarPaciente() { }
function menuBorrarPaciente() { }
function menuNuevoPaciente() { }
//INICIO DEL PROGRAMA
/* CARGA DE BBDD */
menuBienvenida();
/* GUARDADO DE BBDD */
