import Sucursal from "./sucursales";

export default class Veterinaria {
  private nombre: string;
  private sucursales: Array<Sucursal>;
  private proveedores: Array<Proveedor>;

  public constructor(
    nombre: string,
    sucursales: Array<Sucursal>,
    proveedores: Array<Proveedor>
  ) {
    this.nombre = nombre;
    this.sucursales = sucursales;
    this.proveedores = proveedores;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  public getSucursal() {}

  public setSucursal() {}

  public getProveedor() {}

  public setProveedor() {}

  public borrarSucursal() {}

  public borrarProveedor() {}

  public listarSucursal() {}

  public listarProveedor() {}
}
