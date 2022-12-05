import Cliente from "./cliente";
import Paciente from "./Paciente";
import Sucursal from "./sucursales";
import generadorDeID from "./generadorId";
import * as readlineSync from 'readline-sync';

//Funcion que genera una nueva Sucursal desde consola
export function nuevaSucursal(arregloSucursales:Array<Sucursal>, arregloCliente:Array<Cliente>,arregloIdSucursal:Array<number>): void {
    let IDSucursal : number= generadorDeID(arregloIdSucursal);
    let direccionSucursal : string = readlineSync.question(" Ingrese la direccion de la nueva Sucursal:  ");
    let telefonoSucursal: number = Number(readlineSync.question("Ingrese el telefono de la Sucursal:   "));
    let listaSucursal : Array<Sucursal> = arregloSucursales;
    let nuevaSucursal : Sucursal= new Sucursal(IDSucursal,direccionSucursal,telefonoSucursal,arregloCliente);
    listaSucursal.push(nuevaSucursal);
}
//Menu de una Nueva Sucursal
export function menuNuevaSucursal(): void {
    console.clear();
    console.log("---------------------------");
    console.log(" Ingresar nueva Sucursal");
    console.log("---------------------------");
    console.log("");
    nuevaSucursal(arregloSucursales,arregloClientes,arregloIdSucursal);
}
//Funcion que genera un nuevo Cliente desde consola
export function nuevoCliente(arregloCliente:Array<Cliente>, arregloPacientes:Array<Paciente>,arregloIdCliente:Array<number>): void {
    let IDCliente : number= generadorDeID(arregloIdCliente);
    let nombreCliente : string = readlineSync.question(" Ingrese Nombre y Apellido del nuevo Cliente:  ");
    let telefonoCliente: number = Number(readlineSync.question("Ingrese el telefono del Cliente:   "));
    let listaCliente : Array<Cliente> = arregloCliente;
    let nuevoCliente : Cliente = new Cliente(IDCliente,nombreCliente,telefonoCliente,false,0,arregloPacientes);
    listaCliente.push(nuevoCliente);
}
//Menu de un Nuevo Cliente
export function menuNuevoCliente(): void {
    console.clear();
    console.log("---------------------------");
    console.log(" Ingresar nuevo Cliente");
    console.log("---------------------------");
    console.log("");
    nuevoCliente(arregloClientes arregloPacientes,arregloIdCliente);
}
/*export function menuNuevoCliente(): void {
    console.clear();
    console.log("---------------------------");
    console.group("Ingresar nuevo Cliente");
    console.log("---------------------------");
    console.log("");
    console.groupEnd();
    nuevoCliente(arregloClientes arregloPacientes,arregloIdCliente);
}*/
//Funcion que genera un nuevo Paciente desde consola
export function nuevoPaciente(IDDueño: number, arregloPacientes:Array<Paciente>, arregloHistoriaClinica:Array<string>): void {
    let IDDueñoPaciente : number = IDDueño;
    let nombrePaciente : string = readlineSync.question(" Ingrese el Nombre del Paciente:   ");
    let especie : string = readlineSync.question(" Ingrese la especie del Paciente---(GATO/PERRO/EXOTICA):   ");
    let listaPaciente : Array<Paciente> = arregloPacientes;
    let nuevoPaciente: Paciente = new Paciente(IDDueñoPaciente,nombrePaciente,especie,arregloHistoriaClinica);
    listaPaciente.push(nuevoPaciente);   
}
//Menu de un nuevo Paciente
export function menuNuevoPaciente(): void {
    console.clear();
    console.log("---------------------------");
    console.log(" Ingresar nuevo Paciente");
    console.log("---------------------------");
    console.log("");
    nuevoPaciente(this.IDdueño ,arregloPacientes,arregloHistoriaClinica);
}