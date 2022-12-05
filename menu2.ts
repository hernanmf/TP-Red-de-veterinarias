/* IMPORTANTE.... HASTA LA LINEA 69 ES SOLO PARA PROBAR LAS FUNCIONES. NO HACEN FALTA PARA EL MENU PRINCIPAL*/
import Cliente from "./cliente";
import Paciente from "./Paciente";
import Proveedor from "./Proveedor";
import Sucursal from "./sucursales";
import Veterinarias from "./veterinarias";
import generadorDeID from "./generadorId";
import {
  LectorArchivos,
  crearCliente,
  crearPaciente,
  crearProveedor,
  crearSucursal,
} from "./GestorDeArchivos";

/* import * as fs from "fs"; */
import * as ReadFileSync from "readline-sync";
import * as ReadlineSync from "readline-sync";
import Veterinaria from "./veterinarias";

//Cargamos los arreglos clientes, pacientes y proveedores--->
let datosSucursales: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/sucursales.txt"
);
let arregloSucursales: Array<Sucursal> = [];

let datosClientes: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/clientes.txt"
);
let arregloClientes: Array<Cliente> = [];
let datosPacientes: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/paciente.txt"
);
let arregloPacientes: Array<Paciente> = [];
let datosProveedor: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/proveedores.txt"
);
let arregloProveedor: Array<Proveedor> = [];
let arregloHistClinica: Array<string> = [];
for (let i: number = 0; i < datosClientes.getArregloString().length; i++) {
  crearCliente(
    datosClientes.getArregloString()[i],
    arregloClientes,
    arregloPacientes
  );
}
for (let i: number = 0; i < datosPacientes.getArregloString().length; i++) {
  crearPaciente(
    datosPacientes.getArregloString()[i],
    arregloPacientes,
    arregloHistClinica
  );
}
for (let i: number = 0; i < datosProveedor.getArregloString().length; i++) {
  crearProveedor(datosProveedor.getArregloString()[i], arregloProveedor);
}

for (let i: number = 0; i < datosSucursales.getArregloString().length; i++) {
  crearSucursal(datosSucursales.getArregloString()[i], arregloSucursales);
}
var veterinariaInstanciada = new Veterinaria(
  "Camerun Soft",
  arregloSucursales,
  arregloProveedor
);

var sucursalInstanciada: Sucursal;
var clienteInstanciado: Cliente;





//CREACION DE FUNCIONES E IMPLEMENTACION DE LAS mismas
function menuBorrarSucursal(arregloSucursales:Array<Sucursal>,idSucursal:number){
for(let i=0;i<arregloSucursales.length;i++){
    if(arregloSucursales[i].getIDsucursal()===idSucursal){
        arregloSucursales.splice(i, 1)
        return console.log("la sucursal ha sido borrada")
    }
    else if (i===arregloSucursales.length && idSucursal != arregloSucursales[i].getIDsucursal()) {
    return console.log(`el id de sucursal ${idSucursal} no fue encontrado.`)}
}
}


//implementacion de la funcion menuBorrarSucursal
menuBorrarSucursal(arregloSucursales,Number(ReadlineSync.question("ingrese el id de la sucursal a borrar")))



/******************************* */

function menuBorrarCliente(arregloClientes:Array<Cliente>,idCliente:number){
    for(let i=0;i<arregloClientes.length;i++){
        if(arregloClientes[i].getIdCliente()===idCliente){
            arregloClientes.splice(i, 1)
            return console.log("el cliente ha sido borrado")
        }
        else if (i===arregloClientes.length && idCliente != arregloClientes[i].getIdCliente()) {
        return console.log(`el id de cliente ${idCliente} no fue encontrado.`)}
    }
    }

// implementacion del menuBorrarCliente

menuBorrarCliente(arregloClientes,Number(ReadlineSync.question("ingrese el id del cliente a borrar")))
/********************************** */

function menuBorrarPaciente(arregloPacientes:Array<Paciente>,idPaciente:number){
    for(let i=0;i<arregloPacientes.length;i++){
        if(arregloPacientes[i].getIDpaciente()===idPaciente){
            arregloPacientes.splice(i, 1)
            return console.log("el Paciente ha sido borrado")
        }
        else if (i===arregloPacientes.length && idPaciente != arregloPacientes[i].getIDpaciente()) {
        return console.log(`el id de Paciente ${idPaciente} no fue encontrado.`)}
    }
    }

// implementacion del menuBorrarPaciente

menuBorrarPaciente(arregloPacientes,Number(ReadlineSync.question("ingrese el id del Paciente a borrar")))
