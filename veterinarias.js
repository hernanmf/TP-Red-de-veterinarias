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
        /* let i: number = 0;
        while (
          i < this.sucursales.length &&
          this.sucursales[i].IDsucursal != IDsucursal
        ) {
          i++;
        }
        if (i < this.sucursales.length) {
          return this.sucursales[i]
        } else {
          console.log(
            "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
          ); */
    };
    Veterinaria.prototype.setSucursal = function (IDsucursal, nuevaSucursal) {
        var i = 0;
        while (i < this.sucursales.length &&
            this.sucursales[i].IDsucursal != IDsucursal) {
            i++;
        }
        if (i < this.sucursales.length) {
            this.sucursales[i] = nuevaSucursal;
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
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
        if (i < this.proveedores.length) {
            /*preguntando si this.proveedores[i].getIDProveedor() === IDproveedor, si no existe en el array se rompe, entonces preguntamos si i no llego al largo del arreglo, que quiere decir q encontro una existencia del id*/
            this.proveedores[i] = nuevoProveedor;
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
        /*   let proveedorExiste: Array<Proveedor> = this.proveedores.filter(
          (Element) => Element.getIDProveedor() === IDproveedor
        );
        if ((proveedorExiste.length = 1)) {
          this.proveedores.push(nuevoProveedor);
          console.log("MODIFICACION REALIZADA");
        } else {
          console.log(
            "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
          ); CONDIGO ALTERNATIVO QUE NO FUNCIONO*/
    };
    Veterinaria.prototype.borrarSucursal = function (IDsucursal) {
        var i = 0;
        while (i < this.sucursales.length - 1 &&
            this.sucursales[i].IDsucursal != IDsucursal) {
            i++;
        }
        if (this.sucursales[i].IDsucursal === IDsucursal) {
            this.sucursales.splice(i, 1);
            console.log("Se elimino la sucursal");
        }
        else {
            console.log("No se encontro la sucursal a eliminar");
        }
    };
    Veterinaria.prototype.borrarProveedor = function (IDproveedor) {
        var i = 0;
        while (i < this.proveedores.length - 1 &&
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
