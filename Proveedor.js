"use strict";
exports.__esModule = true;
var Proveedor = /** @class */ (function () {
    function Proveedor(IDproveedor, Nombre, Telefono) {
        this.IDproveedor = IDproveedor;
        this.Nombre = Nombre;
        this.Telefono = Telefono;
    }
    Proveedor.prototype.getIDProveedor = function () {
        return this.IDproveedor;
    };
    Proveedor.prototype.getNombre = function () {
        return this.Nombre;
    };
    Proveedor.prototype.getTelefono = function () {
        return this.Telefono;
    };
    Proveedor.prototype.setNombre = function (Nombre) {
        this.Nombre = Nombre;
    };
    Proveedor.prototype.setTelefono = function (Telefono) {
        this.Telefono = Telefono;
    };
    return Proveedor;
}());
exports["default"] = Proveedor;
