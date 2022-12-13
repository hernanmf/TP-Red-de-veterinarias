"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(id_Cliente, nombre, telefono, esVip, cantidadVisitas, pacientes) {
        this.id_Cliente = id_Cliente;
        this.nombre = nombre;
        this.telefono = telefono;
        this.esVip = esVip;
        this.cantidadVisitas = cantidadVisitas;
        this.pacientes = pacientes;
    }
    Cliente.prototype.getIdCliente = function () {
        return this.id_Cliente;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.getEsVip = function () {
        return this.esVip;
    };
    Cliente.prototype.getCantidadVisitas = function () {
        return this.cantidadVisitas;
    };
    Cliente.prototype.registrarVisita = function () {
        this.cantidadVisitas++;
        if (this.cantidadVisitas >= 5) {
            this.esVip = true;
        }
    };
    Cliente.prototype.getPaciente = function (id_Cliente, nombrePaciente) {
        /* for (let i = 0; i < this.pacientes.length; i++) {
          if (id_Cliente === this.pacientes[i].getIDdueño()) {
            return this.pacientes[i].getPacientes(nombrePaciente);
          }
        } */
        return this.pacientes.find(function (Element) {
            return Element.getIDPaciente() === id_Cliente &&
                Element.getNombre() === nombrePaciente;
        });
    };
    Cliente.prototype.listarPacientes = function () {
        var _this = this;
        return this.pacientes.filter(function (Element) { return Element.getIDPaciente() === _this.id_Cliente; });
        /*     return this.pacientes;
         */
    };
    Cliente.prototype.setPaciente = function (nombrePaciente, IDPaciente, nuevoPaciente) {
        var existiaPaciente = false;
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].getNombre() === nombrePaciente &&
                this.pacientes[i].getIDPaciente() === IDPaciente) {
                this.pacientes[i] = nuevoPaciente;
                existiaPaciente = true;
            }
        }
        if (existiaPaciente) {
            console.clear();
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL PACIENTE NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTAR");
        }
    };
    Cliente.prototype.borrarPaciente = function (nombrePaciente, IDPaciente) {
        var existiaPaciente = false;
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].getNombre() === nombrePaciente &&
                this.pacientes[i].getIDPaciente() === IDPaciente) {
                this.pacientes.splice(i, 1);
                existiaPaciente = true;
            }
        }
        if (existiaPaciente) {
            console.clear();
            console.log("EL PACIENTE HA SIDO ELIMINADO");
        }
        else {
            console.log("EL PACIENTE NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTAR");
        }
    };
    Cliente.prototype.agregarPaciente = function (paciente) {
        this.pacientes.push(paciente);
    };
    return Cliente;
}());
exports["default"] = Cliente;
