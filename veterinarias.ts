import Sucursal from "./sucursales";
import Proveedor from "./Proveedor";

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

  public getSucursal(IDsucursal: number) {
    return this.sucursales.find(
      (Element) => Element.getIDsucursal() === IDsucursal
    );
  }

  public setSucursal(IDsucursal: number, nuevaSucursal: Sucursal) {
    let i: number = 0;
    while (
      i < this.sucursales.length &&
      this.sucursales[i].IDsucursal != IDsucursal
    ) {
      i++;
    }
    if (i < this.sucursales.length) {
      this.sucursales[i] = nuevaSucursal;
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
  }

  public getProveedor(IDproveedor: number) {
    return this.proveedores.find(
      (Element) => Element.getIDProveedor() === IDproveedor
    );
  }

  public setProveedor(IDproveedor: number, nuevoProveedor: Proveedor) {
    let i: number = 0;
    while (
      i < this.proveedores.length &&
      this.proveedores[i].getIDProveedor() != IDproveedor
    ) {
      i++;
    }
    if (i < this.proveedores.length) {
      /*preguntando si this.proveedores[i].getIDProveedor() === IDproveedor, si no existe en el array se rompe, entonces preguntamos si i no llego al largo del arreglo, que quiere decir q encontro una existencia del id*/
      this.proveedores[i] = nuevoProveedor;
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
    /*   let proveedorExiste: Array<Proveedor> = this.proveedores.filter(
      (Element) => Element.getIDProveedor() === IDproveedor
    );
    if ((proveedorExiste.length = 1)) {
      this.proveedores.push(nuevoProveedor);
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      ); CONDIGO ALTERNATIVO QUE NO FUNCIONO*/
  }

  public borrarSucursal(IDsucursal: number) {
    let i: number = 0;
    while (
      i < this.sucursales.length - 1 &&
      this.sucursales[i].IDsucursal != IDsucursal
    ) {
      i++;
    }
    if (this.sucursales[i].IDsucursal === IDsucursal) {
      this.sucursales.splice(i, 1);
      console.log("Se elimino la sucursal");
    } else {
      console.log("No se encontro la sucursal a eliminar");
    }
  }

  public borrarProveedor(IDproveedor: number) {
    let i: number = 0;
    while (
      i < this.proveedores.length - 1 &&
      this.proveedores[i].getIDProveedor() != IDproveedor
    ) {
      i++;
    }
    if (this.proveedores[i].getIDProveedor() === IDproveedor) {
      this.proveedores.splice(i, 1);
      console.log("se elimino el proveedor");
    } else {
      console.log("no se encontro el Proveedor a eliminar");
    }
  }

  public listarSucursal(): Array<Sucursal> {
    return this.sucursales;
  }

  public listarProveedor(): Array<Proveedor> {
    return this.proveedores;
  }
}
