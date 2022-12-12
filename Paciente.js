"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(IDPaciente, Nombre, Especie) {
        this.IDPaciente = IDPaciente;
        this.Nombre = Nombre;
        this.Especie = Especie;
    }
    Paciente.prototype.getIDPaciente = function () {
        return this.IDPaciente;
    };
    Paciente.prototype.getNombre = function () {
        return this.Nombre;
    };
    Paciente.prototype.setNombre = function (Nombre) {
        this.Nombre = Nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.Especie;
    };
    Paciente.prototype.setEspecie = function (Especie) {
        this.Especie = Especie;
    };
    return Paciente;
}());
exports["default"] = Paciente;
