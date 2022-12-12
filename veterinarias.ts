import Sucursal from "./sucursales";
import Proveedor from "./Proveedor";
import Cliente from "./cliente";
import { Console } from "console";

export default class Veterinaria {
  private nombre: string;
  private sucursales: Array<Sucursal>;
  private proveedores: Array<Proveedor>;
  private clientes: Array<Cliente>;

  public constructor(
    nombre: string,
    sucursales: Array<Sucursal>,
    proveedores: Array<Proveedor>,
    clientes: Array<Cliente>
  ) {
    this.nombre = nombre;
    this.sucursales = sucursales;
    this.proveedores = proveedores;
    this.clientes = clientes;
  }

  public agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  public agregarProveedor(proveedor: Proveedor) {
    this.proveedores.push(proveedor);
  }

  public agregarSucursal(sucursal: Sucursal) {
    this.sucursales.push(sucursal);
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
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
      console.clear();
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
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
      console.clear();
      console.log("se elimino el proveedor");
    } else {
      console.log("no se encontro el Proveedor a eliminar");
    }
  }

  public listarProveedor(): Array<Proveedor> {
    return this.proveedores;
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
      console.clear();
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
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
      console.clear();
      console.log("Se elimino la sucursal");
    } else {
      console.log("No se encontro la sucursal a eliminar");
    }
  }

  public listarSucursal(): Array<Sucursal> {
    return this.sucursales;
  }

  public getCliente(id: number) {
    return this.clientes.find((Element) => Element.getIdCliente() === id);
    /* for (let i: number = 0; i < this.clientes.length; i++) {
      if (id === this.clientes[i].getIdCliente()) {
        return this.clientes[i];
      }
    } */
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
      console.clear();
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
        console.clear();
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
