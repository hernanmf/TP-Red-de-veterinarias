import Paciente from "./Paciente";
import Cliente from "./cliente";

export default class Sucursal {
  public IDsucursal: number;
  public direccion: string;
  public telefono: number;
  public clientes: Array<Cliente>;

  public constructor(
    IDsucursal: number,
    direccion: string,
    telefono: number,
    clientes: Array<Cliente>
  ) {
    this.IDsucursal = IDsucursal;
    this.direccion = direccion;
    this.telefono = telefono;
    this.clientes = clientes;
  }

  public getIDsucursal(): number {
    return this.IDsucursal;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public getTelefono(): number {
    return this.telefono;
  }
  public getCliente(id: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (id === this.clientes[i].getIdCliente()) {
        return this.clientes[i];
      }
    }
  }
  public getPaciente(id_Cliente: number, nombrePaciente: string) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (id_Cliente === this.clientes[i].getIdCliente()
      && nombrePaciente === this.clientes[i].getPaciente(id_Cliente)?.getNombre() ) {
        return this.clientes[i].getPaciente(id_Cliente);
      }
    }
  }
  public setDireccion(nuevaDireccion: string): void {
    this.direccion = nuevaDireccion;
  }
  public setTelefono(nuevoTelefono: number): void {
    this.telefono = nuevoTelefono;
  }
  public setCliente(id_Cliente: number, nuevoCliente: Cliente) {
    let i: number = 0;
    while (
      i < this.clientes.length &&
      this.clientes[i].getIdCliente() != id_Cliente
    ) {
      i++;
    }
    if (i < this.clientes.length) {
      this.clientes[i] = nuevoCliente;
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
  }

  public borrarCliente(idCliente: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].getIdCliente() === idCliente) {
        this.clientes.splice(i, 1);
        return console.log("El cliente ha sido borrado");
      } else if (
        i === this.clientes.length - 1 &&
        idCliente != this.clientes[i].getIdCliente()
      ) {
        return console.log(`El id de cliente ${idCliente} no fue encontrado.`);
      }
    }
  }

  public listarClientes(): Array<Cliente> {
    return this.clientes;
  }
}
