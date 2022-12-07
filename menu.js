"use strict";
exports.__esModule = true;
exports.menuBienvenida = void 0;
var cliente_1 = require("./cliente");
var Paciente_1 = require("./Paciente");
var Proveedor_1 = require("./Proveedor");
var sucursales_1 = require("./sucursales");
var generadorId_1 = require("./generadorId");
var GestorDeArchivos_1 = require("./GestorDeArchivos");
var ReadlineSync = require("readline-sync");
var veterinarias_1 = require("./veterinarias");
var generadorId_2 = require("./generadorId");
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
var arregloIdSucursal = [];
var arregloIdCliente = [];
var arregloIdProveedor = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearCliente)(datosClientes.getArregloString()[i], arregloClientes, arregloPacientes, arregloIdCliente);
}
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearPaciente)(datosPacientes.getArregloString()[i], arregloPacientes, arregloHistClinica);
}
for (var i = 0; i < datosProveedor.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearProveedor)(datosProveedor.getArregloString()[i], arregloProveedor);
}
for (var i = 0; i < datosSucursales.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearSucursal)(datosSucursales.getArregloString()[i], arregloSucursales, arregloIdSucursal);
}
var veterinariaInstanciada = new veterinarias_1["default"]("Camerun Soft", arregloSucursales, arregloProveedor);
var sucursalInstanciada /* =arregloSucursales[0] */;
var clienteInstanciado /* =arregloClientes[2] */;
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
        opcionMenuBienvenida = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuBienvenida) {
            case 1:
                /* console.clear(); */
                menuProveedores();
                break;
            case 2:
                /* console.clear(); */
                menuSucursales();
                break;
            case 0:
                /* console.clear(); */
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
/*********************************PROVEEDORES************************************ */
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
        opcionMenuProveedores = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        console.clear;
        switch (opcionMenuProveedores) {
            case 1:
                /* console.clear(); */
                mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
                menuModificarProveedor();
                break;
            case 2:
                /* console.clear(); */
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
function menuBorrarProveedor() {
    var IDaCambiar = Number(ReadlineSync.questionInt("Ingrese el id del Proveedor a borrar: "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
    }
    else {
        veterinariaInstanciada.borrarProveedor(IDaCambiar);
    }
}
function menuNuevoProveedor() {
    var IDproveedor = (0, generadorId_2["default"])(arregloIdProveedor);
    var Nombre = ReadlineSync.question("Ingrese el nombre del nuevo proveedor");
    var Telefono = ReadlineSync.questionInt("Ingrese el numero de telefono del nuevo proveedor");
    var nuevoProveedor = new Proveedor_1["default"](IDproveedor, Nombre, Telefono);
    arregloProveedor.push(nuevoProveedor);
}
/*****************************SUCURSALES************************************** */
function menuSucursales() {
    var opcionMenuSucursal = Number(8);
    while (opcionMenuSucursal != Number(9)) {
        /* console.clear(); */
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
        opcionMenuSucursal = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuSucursal) {
            case 1:
                menuEntrarASucursal( /* sucursalInstanciada */);
                break;
            case 2:
                menuModificarSucursal(sucursalInstanciada);
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
function menuEntrarASucursal( /* sucursalInstanciada:Sucursal */) {
    var IDSucursalAInstanciar = Number(ReadlineSync.questionInt("Ingrese el id de la sucursal a la que desea ingresar(0 para cancelar operacion): "));
    if (IDSucursalAInstanciar != 0) {
        var i = 0;
        var listaDeSucursales = veterinariaInstanciada.listarSucursal();
        while (i < listaDeSucursales.length /*-1*/ &&
            listaDeSucursales[i].getIDsucursal() != IDSucursalAInstanciar) {
            i++;
        }
        /* if (i < listaDeSucursales.length ) {
          sucursalInstanciada = veterinariaInstanciada.getSucursal(
            IDSucursalAInstanciar
          ); */
        if (i < listaDeSucursales.length && IDSucursalAInstanciar === listaDeSucursales[i].getIDsucursal() /*- 1*/) {
            sucursalInstanciada = listaDeSucursales[i];
            menuEnSucursal();
        }
        ;
    }
    else {
        console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
    }
}
function menuModificarSucursal(sucursalInstanciada) {
    var IDaCambiar = Number(ReadlineSync.question("Ingrese el id de la sucursal que desea cambiar(0 para cancelar operacion): "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
        setTimeout(function () {
            console.log(" ");
        }, 2000);
    }
    else {
        var nuevaSucursal_1;
        var nuevaDireccion = ReadlineSync.question("Ingrese la nueva direccion de la sucursal, si no cambia, ingrese la misma: ");
        var nuevoTelefono = Number(ReadlineSync.questionInt("Ingrese el nuevo telefono de la sucursal, si no cambia, ingrese el mismo: "));
        nuevaSucursal_1 = new sucursales_1["default"](IDaCambiar, nuevaDireccion, nuevoTelefono, sucursalInstanciada.listarClientes());
        veterinariaInstanciada.setSucursal(IDaCambiar, nuevaSucursal_1);
    }
}
function menuBorrarSucursal() {
    var IDaCambiar = Number(ReadlineSync.questionInt("Ingrese el id de la sucursal a borrar: "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
    }
    else {
        veterinariaInstanciada.borrarSucursal(IDaCambiar);
    }
}
//Funcion que genera una nueva Sucursal desde consola
function nuevaSucursal(arregloSucursales, arregloCliente, arregloIdSucursal) {
    var IDSucursal = (0, generadorId_1["default"])(arregloIdSucursal);
    var direccionSucursal = ReadlineSync.question(" Ingrese la direccion de la nueva Sucursal:  ");
    var telefonoSucursal = Number(ReadlineSync.question("Ingrese el telefono de la Sucursal:   "));
    var listaSucursal = arregloSucursales;
    var nuevaSucursal = new sucursales_1["default"](IDSucursal, direccionSucursal, telefonoSucursal, arregloCliente);
    listaSucursal.push(nuevaSucursal);
}
//Menu de una Nueva Sucursal
function menuNuevaSucursal() {
    console.clear();
    console.log("---------------------------");
    console.log(" Ingresar nueva Sucursal");
    console.log("---------------------------");
    console.log("");
    nuevaSucursal(arregloSucursales, arregloClientes, arregloIdSucursal);
}
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
        /* console.clear(); */
        console.log("------------------------- ");
        console.log("ID Sucursal: " +
            sucursalInstanciada.getIDsucursal() +
            " Direccion: " +
            sucursalInstanciada.getDireccion() +
            " Telefono: " +
            sucursalInstanciada.getTelefono());
        console.log("------------------------- ");
        console.log(" ");
        mostrarListaClientes(sucursalInstanciada.listarClientes());
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
        opcionMenuEnSucursal = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuEnSucursal) {
            case 1:
                mostrarListaClientes(sucursalInstanciada.listarClientes());
                break;
            case 2:
                /* LISTAR PACIENTES */
                break;
            case 3:
                menuEntrarACliente( /* clienteInstanciado */);
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
/**********************************CLIENTES********************************* */
function mostrarListaClientes(lista) {
    console.log("CLIENTES");
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
function menuBorrarCliente() {
    var IDaCambiar = Number(ReadlineSync.questionInt("Ingrese el id del Cliente a borrar: "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
    }
    else {
        sucursalInstanciada.borrarCliente(IDaCambiar);
    }
}
//Funcion que genera un nuevo Cliente desde consola
function nuevoCliente(arregloCliente, arregloPacientes, arregloIdCliente) {
    var IDCliente = (0, generadorId_1["default"])(arregloIdCliente);
    var nombreCliente = ReadlineSync.question(" Ingrese Nombre y Apellido del nuevo Cliente:  ");
    var telefonoCliente = Number(ReadlineSync.question("Ingrese el telefono del Cliente:   "));
    var listaCliente = arregloCliente;
    var nuevoCliente = new cliente_1["default"](IDCliente, nombreCliente, telefonoCliente, false, 0, arregloPacientes);
    listaCliente.push(nuevoCliente);
    arregloIdCliente.push(IDCliente);
}
//Menu de un Nuevo Cliente
function menuNuevoCliente() {
    console.clear();
    console.log("---------------------------");
    console.log(" Ingresar nuevo Cliente");
    console.log("---------------------------");
    console.log("");
    nuevoCliente(sucursalInstanciada.clientes, arregloPacientes, arregloIdCliente);
}
function menuEntrarACliente( /* clienteInstanciado:Cliente */) {
    var IDClienteAInstanciar = Number(ReadlineSync.questionInt("Ingrese el id del cliente al que desea ingresar(0 para cancelar operacion): "));
    if (IDClienteAInstanciar != 0) {
        var i = 0;
        var listaDeClientes = sucursalInstanciada.listarClientes();
        while (i < listaDeClientes.length &&
            listaDeClientes[i].getIdCliente() != IDClienteAInstanciar) {
            i++;
        }
        /* if (i < listaDeClientes.length ) {
          clienteInstanciado = sucursalInstanciada.getCliente(IDClienteAInstanciar);
          menuEnCliente();
        } */
        if (i < listaDeClientes.length && IDClienteAInstanciar === listaDeClientes[i].getIdCliente() /*- 1*/) {
            clienteInstanciado = listaDeClientes[i];
            menuEnCliente();
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
    }
}
function menuEnCliente() {
    var opcionMenuEnCliente = Number(8);
    var listaDePacientes = clienteInstanciado.listarPacientes();
    while (opcionMenuEnCliente != Number(9)) {
        /* console.clear(); */
        console.log("------------------------- ");
        console.log("ID Cliente: " +
            clienteInstanciado.getIdCliente() +
            " Nombre: " +
            clienteInstanciado.getNombre() +
            " Telefono: " +
            clienteInstanciado.getTelefono() +
            " Es Vip?: " +
            clienteInstanciado.getEsVip() +
            " Visitas: " +
            clienteInstanciado.getCantidadVisitas());
        console.log(" ");
        console.log("ID Paciente / Nombre / Especie");
        for (var i = 0; i < listaDePacientes.length; i++) {
            console.log(listaDePacientes[i].getIDpaciente() +
                " / " +
                listaDePacientes[i].getNombre() +
                " / " +
                listaDePacientes[i].getEspecie());
        }
        console.log(" ");
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
        opcionMenuEnCliente = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuEnCliente) {
            case 1:
                menuRegistrarVisita();
                break;
            case 2:
                menuModificarCliente();
                break;
            case 3:
                menuListarPacientes();
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
function menuModificarCliente() {
    var nuevoCliente;
    var nuevoNombre = ReadlineSync.question("Ingrese el nuevo nombre del cliente, si no cambia, ingrese el mismo: ");
    var nuevoTelefono = Number(ReadlineSync.questionInt("Ingrese el nuevo telefono del cliente, si no cambia, ingrese el mismo: "));
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.questionInt("Esta seguro de realizar los cambios? 1-Si 2-No"));
    }
    if (estaSeguro == 1) {
        nuevoCliente = new cliente_1["default"](clienteInstanciado.getIdCliente(), nuevoNombre, nuevoTelefono, clienteInstanciado.getEsVip(), clienteInstanciado.getCantidadVisitas(), clienteInstanciado.listarPacientes());
        sucursalInstanciada.setCliente(clienteInstanciado.getIdCliente(), nuevoCliente);
        console.log("CAMBIOS GUARDADOS");
    }
    else {
        console.log("CAMBIOS DESCARTADOS");
    }
}
/******************PACIENTES****************** */
function menuModificarPaciente() {
    var IDaCambiar = Number(ReadlineSync.question("Ingrese el id del paciente que desea cambiar(0 para cancelar operacion): "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
        setTimeout(function () {
            console.log(" ");
        }, 2000);
    }
    else {
        var nuevoPaciente_1;
        var nuevoNombre = ReadlineSync.question("Ingrese el nuevo nombre del paciente, si no cambia, ingrese el mismo: ");
        var nuevaEspecie = ReadlineSync.question("Ingrese la nueva especie del paciente, si no cambia, ingrese la misma: ");
        /* let pacienteAcambiar=clienteInstanciado.getPaciente(IDaCambiar); */
        nuevoPaciente_1 = new Paciente_1["default"](IDaCambiar, nuevoNombre, nuevaEspecie);
        clienteInstanciado.setPaciente(IDaCambiar, nuevoPaciente_1);
    }
}
function menuRegistrarVisita() {
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.question("El cliente tiene " +
            clienteInstanciado.getCantidadVisitas() +
            " visitas, esta seguro que desea registrar una visita nueva? 1-Si 2-No"));
    }
    if (estaSeguro == 1) {
        clienteInstanciado.registrarVisita();
        console.log("VISITA REGISTRADA!! GRACIAS POR ELEGIRNOS!! VUELVA PRONTOOOSSSSS");
    }
    else {
        console.log("LA VISITA NO SE HA REGISTRADO");
    }
}
function menuBorrarPaciente() {
    var IDaCambiar = Number(ReadlineSync.questionInt("Ingrese el id del Paciente a borrar: "));
    if (IDaCambiar === 0) {
        console.log("MODIFICACION CANCELADA");
    }
    else {
        clienteInstanciado.borrarPaciente(IDaCambiar);
    }
}
function menuListarPacientes() {
    for (var i = 0; i < clienteInstanciado.listarPacientes().length; i++) {
        console.log("Nombre del paciente: ".concat(clienteInstanciado.listarPacientes()[i].getNombre()));
        console.log("Especie del paciente: ".concat(clienteInstanciado.listarPacientes()[i].getEspecie()));
        console.log("ID del Cliente: ".concat(clienteInstanciado.listarPacientes()[i].getIDpaciente()));
    }
}
//Funcion que genera un nuevo Paciente desde consola
function nuevoPaciente(IDDueño, arregloPacientes, arregloHistoriaClinica) {
    var IDDueñoPaciente = IDDueño;
    var nombrePaciente = ReadlineSync.question(" Ingrese el Nombre del Paciente:   ");
    var especie = ReadlineSync.question(" Ingrese la especie del Paciente---(GATO/PERRO/EXOTICA):   ");
    var listaPaciente = arregloPacientes;
    var nuevoPaciente = new Paciente_1["default"](IDDueñoPaciente, nombrePaciente, especie);
    listaPaciente.push(nuevoPaciente);
}
//Menu de un nuevo Paciente
function menuNuevoPaciente() {
    console.clear();
    console.log("---------------------------");
    console.log(" Ingresar nuevo Paciente");
    console.log("---------------------------");
    console.log("");
    nuevoPaciente(this.IDdueño, arregloPacientes, arregloHistClinica);
}
//INICIO DEL PROGRAMA
/* CARGA DE BBDD */
menuBienvenida();
/* GUARDADO DE BBDD */
