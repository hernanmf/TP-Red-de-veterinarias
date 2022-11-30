"use strict";
exports.__esModule = true;
var Sucursal = /** @class */ (function () {
    function Sucursal(IDsucursal, direccion, telefono, clientes) {
        this.IDsucursal = IDsucursal;
        this.direccion = direccion;
        this.telefono = telefono;
        this.clientes = clientes;
    }
    Sucursal.prototype.getIDsucursal = function () {
        return this.IDsucursal;
    };
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
    Sucursal.prototype.getTelefono = function () {
        return this.telefono;
    };
    Sucursal.prototype.getCliente = function (id) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (id === this.clientes[i].id_Cliente) {
                return this.clientes[i];
            }
        }
    };
    Sucursal.prototype.getPaciente = function (id_Cliente, nombrePaciente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (id_Cliente === this.clientes[i].id_Cliente) {
                return this.clientes[i].getPacientes(nombrePaciente);
            }
        }
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
        return this.clientes;
    };
    return Sucursal;
}());
exports["default"] = Sucursal;
