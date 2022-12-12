"use strict";
exports.__esModule = true;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, sucursales, proveedores, clientes) {
        this.nombre = nombre;
        this.sucursales = sucursales;
        this.proveedores = proveedores;
        this.clientes = clientes;
    }
    Veterinaria.prototype.agregarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    Veterinaria.prototype.agregarProveedor = function (proveedor) {
        this.proveedores.push(proveedor);
    };
    Veterinaria.prototype.agregarSucursal = function (sucursal) {
        this.sucursales.push(sucursal);
    };
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
<<<<<<< HEAD
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
=======
    Veterinaria.prototype.getProveedor = function (IDproveedor) {
        return this.proveedores.find(function (Element) { return Element.getIDProveedor() === IDproveedor; });
>>>>>>> hernan
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
            console.clear();
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
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
            console.clear();
            console.log("se elimino el proveedor");
        }
        else {
            console.log("no se encontro el Proveedor a eliminar");
        }
    };
    Veterinaria.prototype.listarProveedor = function () {
        return this.proveedores;
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
        if (i < this.sucursales.length) {
            this.sucursales[i] = nuevaSucursal;
            console.clear();
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
    };
    Veterinaria.prototype.borrarSucursal = function (IDsucursal) {
        var i = 0;
        while (i < this.sucursales.length - 1 &&
            this.sucursales[i].IDsucursal != IDsucursal) {
            i++;
        }
        if (this.sucursales[i].IDsucursal === IDsucursal) {
            this.sucursales.splice(i, 1);
            console.clear();
            console.log("Se elimino la sucursal");
        }
        else {
            console.log("No se encontro la sucursal a eliminar");
        }
    };
    Veterinaria.prototype.listarSucursal = function () {
        return this.sucursales;
    };
    Veterinaria.prototype.getCliente = function (id) {
        return this.clientes.find(function (Element) { return Element.getIdCliente() === id; });
        /* for (let i: number = 0; i < this.clientes.length; i++) {
          if (id === this.clientes[i].getIdCliente()) {
            return this.clientes[i];
          }
        } */
    };
    Veterinaria.prototype.setCliente = function (id_Cliente, nuevoCliente) {
        var i = 0;
        while (i < this.clientes.length &&
            this.clientes[i].getIdCliente() != id_Cliente) {
            i++;
        }
        if (i < this.clientes.length) {
            this.clientes[i] = nuevoCliente;
            console.clear();
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
    };
    Veterinaria.prototype.borrarCliente = function (idCliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getIdCliente() === idCliente) {
                this.clientes.splice(i, 1);
                console.clear();
                return console.log("El cliente ha sido borrado");
            }
            else if (i === this.clientes.length - 1 &&
                idCliente != this.clientes[i].getIdCliente()) {
                return console.log("El id de cliente ".concat(idCliente, " no fue encontrado."));
            }
        }
    };
    Veterinaria.prototype.listarClientes = function () {
        return this.clientes;
    };
    return Veterinaria;
}());
exports["default"] = Veterinaria;
