import * as fs from "fs";
import * as readFileSync from "readline-sync";
import * as readlineSync from "readline-sync";
import Cliente from "./cliente";
import Paciente from "./paciente";
import Proveedor from "./proveedor";
import Sucursal from "./sucursales";

export class LectorArchivos {
  private arregloString: string[];
  constructor(txtFileLocation: string) {
    let archivoTxt: string = fs.readFileSync(txtFileLocation, "utf-8");
    this.arregloString = archivoTxt.split(";"); //vamos a tener nuestro "objetos" separados por ;
  }
  public mostrarArreglo(): void {
    console.log(this.arregloString);
  }
  public getArregloString(): string[] {
    return this.arregloString;
  }
}
//funcion que genera un Objeto de tipo Cliente desde una base de datos(.txt)==>
export function crearCliente(
  cliente: string,
  arregloClientes: Array<Cliente>,
  arregloPacientes: Array<Paciente>
): Array<Cliente> {
  let propiedadCliente: string[] = cliente.split(",");
  let idCliente: number = Number(propiedadCliente[0]);
  let nombreCliente: string = propiedadCliente[1];
  let telefonoCliente: number = Number(propiedadCliente[2]);
  let clienteVip: boolean = Boolean(propiedadCliente[3]);
  let cantidadVisitas: number = Number(propiedadCliente[4]);
  let listaCliente: Array<Cliente> = arregloClientes;
  let nuevoCliente: Cliente = new Cliente(
    idCliente,
    nombreCliente,
    telefonoCliente,
    clienteVip,
    cantidadVisitas,
    arregloPacientes
  );
  listaCliente.push(nuevoCliente);
  return listaCliente;
}

export function crearSucursal(
  sucursal: string,
  arregloSucursales: Array<Sucursal>
): Array<Sucursal> {
  let propiedadSucursal: string[] = sucursal.split(",");
  let IDsucursal: number = Number(propiedadSucursal[0]);
  let Direccion: string = propiedadSucursal[1];
  let Telefono: number = Number(propiedadSucursal[2]);
  let listaSucursal: Array<Sucursal> = arregloSucursales;
  let nuevaSucursal: Sucursal = new Sucursal(
    IDsucursal,
    Direccion,
    Telefono,
    arregloClientes
  );
  listaSucursal.push(nuevaSucursal);
  return listaSucursal;
}
//funcion que genera un Objeto de tipo Proveedor desde una base de datos(.txt)==>
export function crearProveedor(
  proveedor: string,
  arregloProveedor: Array<Proveedor>
): Array<Proveedor> {
  let propiedadProveedor: string[] = proveedor.split(",");
  let idProveedor: number = Number(propiedadProveedor[0]);
  let nombreProveedor: string = propiedadProveedor[1];
  let telProveedor: number = Number(propiedadProveedor[2]);
  let listaProveedor: Array<Proveedor> = arregloProveedor;
  let nuevoProveedor: Proveedor = new Proveedor(
    idProveedor,
    nombreProveedor,
    telProveedor
  );
  listaProveedor.push(nuevoProveedor);
  return listaProveedor;
}
//funcion que genera un Objeto de tipo Paciente desde una base de datos(.txt)==>
export function crearPaciente(
  paciente: string,
  arregloPacientes: Array<Paciente>,
  arregloHistClinica: Array<string>
): Array<Paciente> {
  let propiedadPaciente: string[] = paciente.split(",");
  let idPaciente: number = Number(propiedadPaciente[0]);
  let nombrePaciente: string = propiedadPaciente[1];
  let especie: string = propiedadPaciente[2];
  let historiaClinica: string = propiedadPaciente[3];
  let listaPaciente: Array<Paciente> = arregloPacientes;
  let nuevoPaciente: Paciente = new Paciente(
    idPaciente,
    nombrePaciente,
    especie,
    arregloHistClinica
  );
  listaPaciente.push(nuevoPaciente);
  return listaPaciente;
}

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
