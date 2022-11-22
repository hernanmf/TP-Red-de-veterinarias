"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(IDdueño, Nombre, Especie, HistoriaClinica) {
        this.IDdueño = IDdueño;
        this.Nombre = Nombre;
        this.Especie = Especie;
        this.HistoriaClinica = HistoriaClinica;
    }
    Paciente.prototype.getIDdueño = function () {
        return this.IDdueño;
    };
    Paciente.prototype.getNombre = function () {
        return this.Nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.Especie;
    };
    Paciente.prototype.getHistoriaClinica = function () {
        return this.HistoriaClinica;
    };
    Paciente.prototype.setNombre = function (Nombre) {
        this.Nombre = Nombre;
    };
    Paciente.prototype.setEspecie = function (Especie) {
        this.Especie = Especie;
    };
    Paciente.prototype.addHistoriaClinica = function (NuevaHistoria) {
        this.HistoriaClinica.push(NuevaHistoria);
    };
    return Paciente;
}());
exports["default"] = Paciente;
