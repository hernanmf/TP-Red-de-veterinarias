"use strict";
exports.__esModule = true;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, sucursales, proveedores) {
        this.nombre = nombre;
        this.sucursales = sucursales;
        this.proveedores = proveedores;
    }
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Veterinaria.prototype.getSucursal = function () { };
    Veterinaria.prototype.setSucursal = function () { };
    Veterinaria.prototype.getProveedor = function () { };
    Veterinaria.prototype.setProveedor = function () { };
    Veterinaria.prototype.borrarSucursal = function () { };
    Veterinaria.prototype.borrarProveedor = function () { };
    Veterinaria.prototype.listarSucursal = function () { };
    Veterinaria.prototype.listarProveedor = function () { };
    return Veterinaria;
}());
exports["default"] = Veterinaria;
