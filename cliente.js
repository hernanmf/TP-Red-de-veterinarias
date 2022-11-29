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
    Cliente.prototype.setTelefone = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.setPaciente = function (arregloPacientes, nuevoPaciente) {
        this.pacientes[arregloPacientes.length] = nuevoPaciente;
    };
    Cliente.prototype.registrarVisita = function (cantidadVisitas) {
        this.cantidadVisitas += 1;
        return cantidadVisitas;
    };
    Cliente.prototype.listarPacientes = function (arregloPacientes) {
        for (var i = 0; i < arregloPacientes.length; i++) {
            console.log("Nombre Paciente:  ".concat(arregloPacientes[i].getNombre()));
        }
    };
    Cliente.prototype.borrarPaciente = function (arregloPacientes, nombrePaciente) {
        for (var i = 0; i < arregloPacientes.length; i++) {
            if (arregloPacientes[i].getNombre() === nombrePaciente) {
                arregloPacientes.splice(i, 1);
            }
        }
    };
    return Cliente;
}());
exports["default"] = Cliente;
