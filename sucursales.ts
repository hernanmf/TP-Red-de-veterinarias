import Paciente from "./Paciente";
import Cliente from "./cliente";

export default class Sucursal {
  public IDsucursal: number;
  public direccion: string;
  public telefono: number;

  public constructor(IDsucursal: number, direccion: string, telefono: number) {
    this.IDsucursal = IDsucursal;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  public getIDsucursal(): number {
    return this.IDsucursal;
  }

  public getDireccion(): string {
    return this.direccion;
  }

<<<<<<< HEAD
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
=======
>>>>>>> hernan
  public setDireccion(nuevaDireccion: string): void {
    this.direccion = nuevaDireccion;
  }

  public getTelefono(): number {
    return this.telefono;
  }

  public setTelefono(nuevoTelefono: number): void {
    this.telefono = nuevoTelefono;
  }
}
