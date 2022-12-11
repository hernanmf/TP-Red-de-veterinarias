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
