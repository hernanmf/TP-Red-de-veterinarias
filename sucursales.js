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
        var _a;
        for (var i = 0; i < this.clientes.length; i++) {
            if (id_Cliente === this.clientes[i].getIdCliente()
                && nombrePaciente === ((_a = this.clientes[i].getPaciente(id_Cliente)) === null || _a === void 0 ? void 0 : _a.getNombre())) {
                return this.clientes[i].getPaciente(id_Cliente);
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
    Sucursal.prototype.borrarCliente = function (idCliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getIdCliente() === idCliente) {
                this.clientes.splice(i, 1);
                return console.log("El cliente ha sido borrado");
            }
            else if (i === this.clientes.length - 1 &&
                idCliente != this.clientes[i].getIdCliente()) {
                return console.log("El id de cliente ".concat(idCliente, " no fue encontrado."));
            }
        }
    };
    Sucursal.prototype.listarClientes = function () {
        return this.clientes;
    };
    return Sucursal;
}());
exports["default"] = Sucursal;
