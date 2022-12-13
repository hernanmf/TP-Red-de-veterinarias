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
//Cargamos los arreglos clientes, pacientes y proveedores--->
var datosSucursales = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/sucursales.txt");
var arregloSucursales = [];
var datosClientes = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/clientes.txt");
var arregloClientes = [];
var datosPacientes = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/paciente.txt");
var arregloPacientes = [];
var datosProveedor = new GestorDeArchivos_1.LectorArchivos("./baseDeDatos/proveedores.txt");
var arregloProveedor = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearCliente)(datosClientes.getArregloString()[i], arregloClientes, arregloPacientes);
}
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearPaciente)(datosPacientes.getArregloString()[i], arregloPacientes);
}
for (var i = 0; i < datosProveedor.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearProveedor)(datosProveedor.getArregloString()[i], arregloProveedor);
}
for (var i = 0; i < datosSucursales.getArregloString().length; i++) {
    (0, GestorDeArchivos_1.crearSucursal)(datosSucursales.getArregloString()[i], arregloSucursales);
}
var veterinariaInstanciada = new veterinarias_1["default"]("Camerun Soft", arregloSucursales, arregloProveedor, arregloClientes);
var arregloDeId = [
    50, 365, 898, 555, 222, 120, 10, 87, 180, 345, 900, 610, 121, 237, 122,
];
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
        console.log("3 - Ver Clientes");
        console.log(" ");
        console.log("------------------------- ");
        console.log("0 - Salir");
        console.log("------------------------- ");
        opcionMenuBienvenida = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuBienvenida) {
            case 1:
                console.clear();
                menuProveedores();
                break;
            case 2:
                console.clear();
                menuSucursales();
                break;
            case 3:
                console.clear();
                menuClientes();
                break;
            case 0:
                /* console.clear(); */
                console.log("FIN DEL PROGRAMA");
                break;
            default:
                console.log("OPCION ERRONEA");
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
exports.menuBienvenida = menuBienvenida;
function menuClientes() {
    var opcionMenuClientes = Number(8);
    while (opcionMenuClientes != Number(9)) {
        console.log("------------------------- ");
        console.log("CLIENTES");
        console.log("------------------------- ");
        console.log(" ");
        mostrarListaClientes(veterinariaInstanciada.listarClientes());
        console.log("------------------------- ");
        console.log(" ");
        console.log("1 - Ingresar a cliente");
        console.log("2 - Borrar cliente");
        console.log("3 - Nuevo cliente");
        console.log(" ");
        console.log("------------------------- ");
        console.log("9 - Atras");
        console.log("------------------------- ");
        opcionMenuClientes = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuClientes) {
            case 1:
                menuEntrarACliente();
                break;
            case 2:
                menuBorrarCliente();
                break;
            case 3:
                menuNuevoCliente();
                break;
            default:
                console.log("OPCION ERRONEA");
                setTimeout(function () {
                    console.log(" ");
                }, 2000);
                break;
        }
    }
}
function menuNuevoCliente() {
    console.clear();
    console.log("----------------------");
    console.log("Ingresar nuevo Cliente");
    console.log("----------------------");
    console.log("");
    var IDCliente = (0, generadorId_1["default"])(arregloDeId);
    var nombreCliente = ReadlineSync.question(" Ingrese Nombre y Apellido del nuevo Cliente:  ");
    var telefonoCliente = Number(ReadlineSync.questionInt("Ingrese el telefono del Cliente: "));
    var arregloPacientes = [];
    var nuevoCliente = new cliente_1["default"](IDCliente, nombreCliente.toUpperCase(), telefonoCliente, false, 0, arregloPacientes);
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.questionInt("Confirma el ingreso del nuevo cliente? 1-Si 2-No :"));
    }
    if (estaSeguro == 1) {
        console.clear();
        veterinariaInstanciada.agregarCliente(nuevoCliente);
    }
    else {
        console.log("LOS CAMBIOS NO SE HAN REALIZADO");
    }
}
function menuProveedores() {
    var opcionMenuProveedores = Number(8);
    while (opcionMenuProveedores != Number(9)) {
        console.log("--------------------------------");
        console.log("         PROVEEDORES");
        console.log("--------------------------------");
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
        console.clear();
        switch (opcionMenuProveedores) {
            case 1:
                mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
                menuModificarProveedor();
                break;
            case 2:
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
        console.clear();
        console.log("MODIFICACION CANCELADA");
        setTimeout(function () {
            console.log(" ");
        }, 2000);
    }
    else {
        var NvoProveedor = void 0;
        var NvoNombre = ReadlineSync.question("Nuevo nombre para el proveedor, si no cambia, ingrese el mismo: ");
        NvoNombre = NvoNombre.toUpperCase();
        var nvoTelefono = Number(ReadlineSync.questionInt("Nuevo telefono para el proveedor, si no cambia, ingrese el mismo: "));
        var estaSeguro = 0;
        while (estaSeguro != 1 && estaSeguro != 2) {
            estaSeguro = Number(ReadlineSync.questionInt("Confirma los cambios en el proveedor? 1-Si 2-No :"));
        }
        if (estaSeguro == 1) {
            NvoProveedor = new Proveedor_1["default"](IDaCambiar, NvoNombre, nvoTelefono);
            console.clear();
            veterinariaInstanciada.setProveedor(IDaCambiar, NvoProveedor);
        }
        else {
            console.log("LOS CAMBIOS SE HAN CANCELADO");
        }
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
    console.clear();
    console.log("------------------------");
    console.log("Ingresar nuevo Proveedor");
    console.log("------------------------");
    console.log("");
    var IDProveedor = (0, generadorId_1["default"])(arregloDeId);
    var nombreProveedor = ReadlineSync.question(" Ingrese Nombre del nuevo Proveedor:  ");
    var telefonoProveedor = Number(ReadlineSync.questionInt("Ingrese el telefono del Proveedor: "));
    var nuevoProveedor = new Proveedor_1["default"](IDProveedor, nombreProveedor.toUpperCase(), telefonoProveedor);
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.questionInt("Confirma el ingreso del nuevo proveedor? 1-Si 2-No :"));
    }
    if (estaSeguro == 1) {
        console.clear();
        veterinariaInstanciada.agregarProveedor(nuevoProveedor);
        /* console.log("EL PROVEEDOR HA SIDO CREADO"); */
    }
    else {
        console.log("LOS CAMBIOS NO SE HAN REALIZADO");
    }
}
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
        console.log("1 - Modificar sucursal");
        console.log("2 - Borrar sucursal");
        console.log("3 - Nueva sucursal");
        console.log(" ");
        console.log("------------------------- ");
        console.log("9 - Atras");
        console.log("------------------------- ");
        opcionMenuSucursal = Number(ReadlineSync.questionInt("Ingrese una opcion: "));
        switch (opcionMenuSucursal) {
            case 1:
                menuModificarSucursal();
                break;
            case 2:
                menuBorrarSucursal();
                break;
            case 3:
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
function menuModificarSucursal() {
    console.clear();
    mostrarListaSucursales(veterinariaInstanciada.listarSucursal());
    var IDaCambiar = Number(ReadlineSync.question("Ingrese el id de la sucursal que desea cambiar(0 para cancelar operacion): "));
    if (IDaCambiar === 0) {
        console.clear();
        console.log("MODIFICACION CANCELADA");
        setTimeout(function () {
            console.log(" ");
        }, 2000);
    }
    else {
        var nuevaSucursal = void 0;
        var nuevaDireccion = ReadlineSync.question("Ingrese la nueva direccion de la sucursal, si no cambia, ingrese la misma: ");
        nuevaDireccion = nuevaDireccion.toUpperCase();
        var nuevoTelefono = Number(ReadlineSync.questionInt("Ingrese el nuevo telefono de la sucursal, si no cambia, ingrese el mismo: "));
        nuevaSucursal = new sucursales_1["default"](IDaCambiar, nuevaDireccion, nuevoTelefono);
        veterinariaInstanciada.setSucursal(IDaCambiar, nuevaSucursal);
    }
}
function menuBorrarSucursal() {
    console.clear();
    mostrarListaSucursales(veterinariaInstanciada.listarSucursal());
    var IDaCambiar = Number(ReadlineSync.questionInt("Ingrese el id de la sucursal a borrar: "));
    if (IDaCambiar === 0) {
        console.clear();
        console.log("MODIFICACION CANCELADA");
    }
    else {
        veterinariaInstanciada.borrarSucursal(IDaCambiar);
    }
}
function menuNuevaSucursal() {
    console.clear();
    console.log("------------------------");
    console.log("Ingresar nueva Sucursal");
    console.log("------------------------");
    console.log("");
    var IDSucursal = (0, generadorId_1["default"])(arregloDeId);
    var direccionSucursal = ReadlineSync.question(" Ingrese direccion de la nueva sucursal:  ");
    var telefonoSucursal = Number(ReadlineSync.questionInt("Ingrese el telefono del Sucursal: "));
    var nuevaSucursal = new sucursales_1["default"](IDSucursal, direccionSucursal.toUpperCase(), telefonoSucursal);
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.questionInt("Confirma el ingreso del nuevo Sucursal? 1-Si 2-No :"));
    }
    if (estaSeguro == 1) {
        console.clear();
        veterinariaInstanciada.agregarSucursal(nuevaSucursal);
    }
    else {
        console.log("LOS CAMBIOS NO SE HAN REALIZADO");
    }
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
        console.clear();
        console.log("MODIFICACION CANCELADA");
    }
    else {
        veterinariaInstanciada.borrarCliente(IDaCambiar);
    }
}
function menuEntrarACliente() {
    var IDClienteAInstanciar = Number(ReadlineSync.questionInt("Ingrese el id del cliente al que desea ingresar(0 para cancelar operacion): "));
    if (IDClienteAInstanciar != 0) {
        if (veterinariaInstanciada.getCliente(IDClienteAInstanciar) != null) {
            console.clear();
            clienteInstanciado =
                veterinariaInstanciada.getCliente(IDClienteAInstanciar);
            menuEnCliente(clienteInstanciado);
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
    }
}
function menuEnCliente(clienteInstanciado) {
    var opcionMenuEnCliente = Number(8);
    while (opcionMenuEnCliente != Number(9)) {
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
        if (clienteInstanciado.listarPacientes() != null) {
            console.log(" ");
            console.log("Nombre / Especie");
            for (var i = 0; i < clienteInstanciado.listarPacientes().length; i++) {
                console.log(clienteInstanciado.listarPacientes()[i].getNombre() +
                    " / " +
                    clienteInstanciado.listarPacientes()[i].getEspecie());
            }
        }
        console.log(" ");
        console.log("------------------------- ");
        console.log(" ");
        console.log("1 - Registrar visita");
        console.log("2 - Modificar datos");
        console.log("3 - Modificar paciente");
        console.log("4 - Borrar paciente");
        console.log("5 - Nuevo paciente");
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
                clienteInstanciado = menuModificarCliente(clienteInstanciado);
                break;
            case 3:
                menuModificarPaciente(clienteInstanciado);
                break;
            case 4:
                menuBorrarPaciente();
                break;
            case 5:
                menuNuevoPaciente();
                break;
            case 9:
                console.clear();
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
function menuModificarCliente(clienteInstanciado) {
    console.log(" Nombre: " +
        clienteInstanciado.getNombre() +
        " Telefono: " +
        clienteInstanciado.getTelefono());
    var nuevoNombre = ReadlineSync.question("Ingrese el nuevo nombre del cliente, si no cambia, ingrese el mismo: ");
    nuevoNombre = nuevoNombre.toUpperCase();
    var nuevoTelefono = Number(ReadlineSync.questionInt("Ingrese el nuevo telefono del cliente, si no cambia, ingrese el mismo: "));
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.questionInt("Esta seguro de realizar los cambios? 1-Si 2-No :"));
    }
    if (estaSeguro == 1) {
        var nuevoCliente = new cliente_1["default"](clienteInstanciado.getIdCliente(), nuevoNombre, nuevoTelefono, clienteInstanciado.getEsVip(), clienteInstanciado.getCantidadVisitas(), clienteInstanciado.listarPacientes());
        veterinariaInstanciada.setCliente(clienteInstanciado.getIdCliente(), nuevoCliente);
        console.clear();
        console.log("CAMBIOS GUARDADOS");
        return nuevoCliente;
    }
    else {
        console.log("CAMBIOS DESCARTADOS");
        return clienteInstanciado;
    }
}
function menuModificarPaciente(clienteInstanciado) {
    var pacienteACambiar = ReadlineSync.question("Ingrese el Nombre del paciente que desea cambiar(0 para cancelar operacion): ");
    if (pacienteACambiar === "0") {
        console.log("MODIFICACION CANCELADA");
        setTimeout(function () {
            console.log(" ");
        }, 2000);
    }
    else {
        pacienteACambiar = pacienteACambiar.toUpperCase();
        var nuevoPaciente = void 0;
        var nuevoNombre = ReadlineSync.question("Ingrese el nuevo nombre del paciente, si no cambia, ingrese el mismo: ");
        var noSeEligioEspecie = true;
        var opcionEspecie = void 0;
        var nuevaEspecie = void 0;
        while (noSeEligioEspecie) {
            opcionEspecie = ReadlineSync.questionInt("Ingrese la especie del paciente: 1-Perro 2-Gato 3-Exotico: ");
            if (opcionEspecie === 1) {
                nuevaEspecie = "PERRO";
                noSeEligioEspecie = false;
            }
            else if (opcionEspecie === 2) {
                nuevaEspecie = "GATO";
                noSeEligioEspecie = false;
            }
            else {
                nuevaEspecie = "EXOTICO";
                noSeEligioEspecie = false;
            }
        }
        nuevoNombre = nuevoNombre.toUpperCase();
        nuevoPaciente = new Paciente_1["default"](clienteInstanciado.getIdCliente(), nuevoNombre, nuevaEspecie);
        var estaSeguro = 0;
        while (estaSeguro != 1 && estaSeguro != 2) {
            estaSeguro = Number(ReadlineSync.question("Esta seguro que desea confirmar los cambios? 1-Si 2-No: "));
        }
        if (estaSeguro) {
            clienteInstanciado.setPaciente(pacienteACambiar, clienteInstanciado.getIdCliente(), nuevoPaciente);
        }
        else {
            console.log("LOS CAMBIOS NO SE HAN REALIZADO");
        }
    }
}
function menuRegistrarVisita() {
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.question("El cliente tiene " +
            clienteInstanciado.getCantidadVisitas() +
            " visitas, esta seguro que desea registrar una visita nueva? 1-Si 2-No: "));
    }
    if (estaSeguro == 1) {
        clienteInstanciado.registrarVisita();
        console.clear();
        console.log("VISITA REGISTRADA!! GRACIAS POR ELEGIRNOS!! VUELVA PRONTOOOSSSSS");
    }
    else {
        console.clear();
        console.log("LA VISITA NO SE HA REGISTRADO");
    }
}
function menuBorrarPaciente() {
    var pacienteABorrar = ReadlineSync.question("Ingrese el nombre del Paciente a borrar(Ingrese 0 para cancelar): ");
    pacienteABorrar = pacienteABorrar.toUpperCase();
    if (pacienteABorrar === "0") {
        console.clear();
        console.log("MODIFICACION CANCELADA");
    }
    else {
        var estaSeguro = 0;
        while (estaSeguro != 1 && estaSeguro != 2) {
            estaSeguro = Number(ReadlineSync.questionInt("Confirma el borrado del paciente? 1-Si 2-No :"));
        }
        if (estaSeguro == 1) {
            console.clear();
            clienteInstanciado.borrarPaciente(pacienteABorrar, clienteInstanciado.getIdCliente());
        }
        else {
            console.clear();
            console.log("LOS CAMBIOS NO SE HAN REALIZADO");
        }
    }
}
function menuNuevoPaciente() {
    console.clear();
    console.log("-----------------------");
    console.log("Ingresar nuevo Paciente");
    console.log("-----------------------");
    console.log("");
    var IDPaciente = clienteInstanciado.getIdCliente();
    var nombrePaciente = ReadlineSync.question(" Ingrese Nombre del nuevo Paciente:  ");
    var noSeEligioEspecie = true;
    var opcionEspecie;
    var nuevaEspecie;
    while (noSeEligioEspecie) {
        opcionEspecie = ReadlineSync.questionInt("Ingrese la especie del paciente: 1-Perro 2-Gato 3-Exotico: ");
        if (opcionEspecie === 1) {
            nuevaEspecie = "PERRO";
            noSeEligioEspecie = false;
        }
        else if (opcionEspecie === 2) {
            nuevaEspecie = "GATO";
            noSeEligioEspecie = false;
        }
        else {
            nuevaEspecie = "EXOTICO";
            noSeEligioEspecie = false;
        }
    }
    var nuevoPaciente = new Paciente_1["default"](IDPaciente, nombrePaciente.toUpperCase(), nuevaEspecie);
    var estaSeguro = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
        estaSeguro = Number(ReadlineSync.questionInt("Confirma el ingreso del nuevo paciente? 1-Si 2-No :"));
    }
    if (estaSeguro == 1) {
        clienteInstanciado.agregarPaciente(nuevoPaciente);
        console.clear();
        console.log("EL PACIENTE HA SIDO CREADO");
    }
    else {
        console.clear();
        console.log("LOS CAMBIOS NO SE HAN REALIZADO");
    }
}
//INICIO DEL PROGRAMA
/* CARGA DE BBDD */
menuBienvenida();
/* GUARDADO DE BBDD */
