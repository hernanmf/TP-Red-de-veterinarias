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
            if (id === this.clientes[i].getIdCliente()) {
                return this.clientes[i];
            }
        }
    };
    Sucursal.prototype.getPaciente = function (id_Cliente, nombrePaciente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (id_Cliente === this.clientes[i].getIdCliente()) {
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
    Sucursal.prototype.setCliente = function (id_Cliente, nuevoCliente) {
        var i = 0;
        while (i < this.clientes.length &&
            this.clientes[i].getIdCliente() != id_Cliente) {
            i++;
        }
        if (i < this.clientes.length) {
            this.clientes[i] = nuevoCliente;
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
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
