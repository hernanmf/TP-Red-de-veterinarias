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
    Veterinaria.prototype.getSucursal = function (IDsucursal) {
        return this.sucursales.find(function (Element) { return Element.getIDsucursal() === IDsucursal; });
    };
    Veterinaria.prototype.setSucursal = function (IDsucursal, nuevaSucursal) {
        var i = 0;
        while (i < this.sucursales.length &&
            this.sucursales[i].IDsucursal != IDsucursal) {
            i++;
        }
        if (this.sucursales[i].IDsucursal === IDsucursal) {
            this.sucursales[i] = nuevaSucursal;
            console.log("se cambio la sucursal");
        }
        else {
            console.log("no se encontro la sucursal");
        }
    };
    Veterinaria.prototype.getProveedor = function (IDproveedor) {
        return this.proveedores.find(function (Element) { return Element.getIDProveedor() === IDproveedor; });
    };
    Veterinaria.prototype.setProveedor = function (IDproveedor, nuevoProveedor) {
        var i = 0;
        while (i < this.proveedores.length &&
            this.proveedores[i].getIDProveedor() != IDproveedor) {
            i++;
        }
        if (this.proveedores[i].getIDProveedor() === IDproveedor) {
            this.proveedores[i] = nuevoProveedor;
            console.log("se cambio el proveedor");
        }
        else {
            console.log("no se encontro el Proveedor");
        }
    };
    Veterinaria.prototype.borrarSucursal = function (IDsucursal) {
        var i = 0;
        while (i < this.sucursales.length &&
            this.sucursales[i].IDsucursal != IDsucursal) {
            i++;
        }
        if (this.sucursales[i].IDsucursal === IDsucursal) {
            this.sucursales.splice(i, 1);
            console.log("se elimino la sucursal");
        }
        else {
            console.log("no se encontro la sucursal a eliminar");
        }
    };
    Veterinaria.prototype.borrarProveedor = function (IDproveedor) {
        var i = 0;
        while (i < this.proveedores.length &&
            this.proveedores[i].getIDProveedor() != IDproveedor) {
            i++;
        }
        if (this.proveedores[i].getIDProveedor() === IDproveedor) {
            this.proveedores.splice(i, 1);
            console.log("se elimino el proveedor");
        }
        else {
            console.log("no se encontro el Proveedor a eliminar");
        }
    };
    Veterinaria.prototype.listarSucursal = function () {
        return this.sucursales;
    };
    Veterinaria.prototype.listarProveedor = function () {
        return this.proveedores;
    };
    return Veterinaria;
}());
exports["default"] = Veterinaria;
