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
