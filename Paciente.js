"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(IDpaciente, Nombre, Especie) {
        this.IDpaciente = IDpaciente;
        this.Nombre = Nombre;
        this.Especie = Especie;
    }
    Paciente.prototype.getIDpaciente = function () {
        return this.IDpaciente;
    };
    Paciente.prototype.getNombre = function () {
        return this.Nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.Especie;
    };
    Paciente.prototype.setNombre = function (Nombre) {
        this.Nombre = Nombre;
    };
    Paciente.prototype.setEspecie = function (Especie) {
        this.Especie = Especie;
    };
    return Paciente;
}());
exports["default"] = Paciente;
