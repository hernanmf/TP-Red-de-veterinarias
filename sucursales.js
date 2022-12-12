"use strict";
exports.__esModule = true;
var Sucursal = /** @class */ (function () {
    function Sucursal(IDsucursal, direccion, telefono, clientes) {
        this.IDsucursal = IDsucursal;
        this.direccion = direccion;
        this.telefono = telefono;
        this.clientes = clientes;
    }
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
    Sucursal.prototype.getTelefono = function () {
        return this.telefono;
    };
    Sucursal.prototype.getCliente = function (n) {
        return this.clientes[n];
    };
    Sucursal.prototype.getPaciente = function (posicion) {
        return this.clientes[posicion].getPacientes();
    };
    Sucursal.prototype.setDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
    };
    Sucursal.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Sucursal.prototype.setCliente = function (posicion, nuevoCliente) {
        this.clientes[posicion] = nuevoCliente;
    };
    Sucursal.prototype.borrarCliente = function (posicion) {
        this.clientes = this.clientes.splice(posicion, 1);
    };
    Sucursal.prototype.listarClientes = function () {
        for (var i = 0; i < this.clientes.length; i++) {
            console.log("cliente: ".concat(this.clientes[i].getNombre(), "\n            id: ").concat(this.clientes[i].getIdCliente()));
        }
    };
    Sucursal.prototype.listarSucursales = function () { };
    return Sucursal;
}());
exports["default"] = Sucursal;
