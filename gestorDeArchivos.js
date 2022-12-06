"use strict";
exports.__esModule = true;
exports.crearPaciente = exports.crearProveedor = exports.crearSucursal = exports.crearCliente = exports.LectorArchivos = void 0;
var fs = require("fs");
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var proveedor_1 = require("./proveedor");
var sucursales_1 = require("./sucursales");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, "utf-8");
        this.arregloString = archivoTxt.split(";"); //vamos a tener nuestro "objetos" separados por ;
    }
    LectorArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorArchivos;
}());
exports.LectorArchivos = LectorArchivos;
//funcion que genera un Objeto de tipo Cliente desde una base de datos(.txt)==>
function crearCliente(cliente, arregloClientes, arregloPacientes, arregloIdCliente) {
    var propiedadCliente = cliente.split(",");
    var idCliente = Number(propiedadCliente[0]);
    var nombreCliente = propiedadCliente[1];
    var telefonoCliente = Number(propiedadCliente[2]);
    var clienteVip = Boolean(propiedadCliente[3]);
    var cantidadVisitas = Number(propiedadCliente[4]);
    var listaCliente = arregloClientes;
    var nuevoCliente = new cliente_1["default"](idCliente, nombreCliente, telefonoCliente, clienteVip, cantidadVisitas, arregloPacientes);
    listaCliente.push(nuevoCliente);
    arregloIdCliente.push(idCliente);
    return listaCliente;
}
exports.crearCliente = crearCliente;
function crearSucursal(sucursal, arregloSucursales, arregloIdSucursal) {
    var propiedadSucursal = sucursal.split(",");
    var IDsucursal = Number(propiedadSucursal[0]);
    var Direccion = propiedadSucursal[1];
    var Telefono = Number(propiedadSucursal[2]);
    var listaSucursal = arregloSucursales;
    var nuevaSucursal = new sucursales_1["default"](IDsucursal, Direccion, Telefono, arregloClientes);
    listaSucursal.push(nuevaSucursal);
    arregloIdSucursal.push(IDsucursal);
    return listaSucursal;
}
exports.crearSucursal = crearSucursal;
//funcion que genera un Objeto de tipo Proveedor desde una base de datos(.txt)==>
function crearProveedor(proveedor, arregloProveedor) {
    var propiedadProveedor = proveedor.split(",");
    var idProveedor = Number(propiedadProveedor[0]);
    var nombreProveedor = propiedadProveedor[1];
    var telProveedor = Number(propiedadProveedor[2]);
    var listaProveedor = arregloProveedor;
    var nuevoProveedor = new proveedor_1["default"](idProveedor, nombreProveedor, telProveedor);
    listaProveedor.push(nuevoProveedor);
    return listaProveedor;
}
exports.crearProveedor = crearProveedor;
//funcion que genera un Objeto de tipo Paciente desde una base de datos(.txt)==>
function crearPaciente(paciente, arregloPacientes, arregloHistClinica) {
    var propiedadPaciente = paciente.split(",");
    var idPaciente = Number(propiedadPaciente[0]);
    var nombre = propiedadPaciente[1];
    var especie = propiedadPaciente[2];
    var listaPaciente = arregloPacientes;
    var nuevoPaciente = new paciente_1["default"](idPaciente, nombre, especie);
    listaPaciente.push(nuevoPaciente);
    return listaPaciente;
}
exports.crearPaciente = crearPaciente;
//Cargamos los arreglos clientes, pacientes y proveedores--->
var datosSucursales = new LectorArchivos("./baseDeDatos/sucursales.txt");
var arregloSucursales = [];
var datosClientes = new LectorArchivos("./baseDeDatos/clientes.txt");
var arregloClientes = [];
var datosPacientes = new LectorArchivos("./baseDeDatos/paciente.txt");
var arregloPacientes = [];
var datosProveedor = new LectorArchivos("./baseDeDatos/proveedores.txt");
var arregloProveedor = [];
var arregloHistClinica = [];
var arregloIdClientes = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    crearCliente(datosClientes.getArregloString()[i], arregloClientes, arregloPacientes, arregloIdClientes);
}
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    crearPaciente(datosPacientes.getArregloString()[i], arregloPacientes, arregloHistClinica);
}
for (var i = 0; i < datosProveedor.getArregloString().length; i++) {
    crearProveedor(datosProveedor.getArregloString()[i], arregloProveedor);
}
