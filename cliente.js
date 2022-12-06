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
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.getEsVip = function () {
        return this.esVip;
    };
    Cliente.prototype.getPacientes = function (n) {
        return this.pacientes[n];
    };
    Cliente.prototype.getCantidadVisitas = function () {
        return this.cantidadVisitas;
    };
    Cliente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.setPaciente = function (IDpaciente, nuevoPaciente) {
        var i = 0;
        while (i < this.pacientes.length &&
            this.pacientes[i].getIDpaciente() != IDpaciente) {
            i++;
        }
        if (i < this.pacientes.length) {
            this.pacientes[i] = nuevoPaciente;
            console.log("MODIFICACION REALIZADA");
        }
        else {
            console.log("EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO");
        }
    };
    Cliente.prototype.registrarVisita = function () {
        this.cantidadVisitas++;
    };
    Cliente.prototype.listarPacientes = function () {
        return this.pacientes;
    };
    Cliente.prototype.borrarPaciente = function (idPaciente) {
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].getIDpaciente() === idPaciente) {
                this.pacientes.splice(i, 1);
                return console.log("El Paciente ha sido borrado");
            }
            else if (i === this.pacientes.length - 1 &&
                idPaciente != this.pacientes[i].getIDpaciente()) {
                return console.log("El id de Paciente ".concat(idPaciente, " no fue encontrado."));
            }
        }
    };
    return Cliente;
}());
exports["default"] = Cliente;
