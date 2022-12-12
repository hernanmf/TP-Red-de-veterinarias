"use strict";
exports.__esModule = true;
var Sucursal = /** @class */ (function () {
    function Sucursal(IDsucursal, direccion, telefono) {
        this.IDsucursal = IDsucursal;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    Sucursal.prototype.getIDsucursal = function () {
        return this.IDsucursal;
    };
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
<<<<<<< HEAD
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
=======
>>>>>>> hernan
    Sucursal.prototype.setDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
    };
    Sucursal.prototype.getTelefono = function () {
        return this.telefono;
    };
    Sucursal.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    return Sucursal;
}());
exports["default"] = Sucursal;
