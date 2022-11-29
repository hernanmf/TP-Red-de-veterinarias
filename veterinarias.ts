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

  public getSucursal(IDsucursal:number) {
    return this.sucursales.find(Element=>Element.getIDsucursal()===IDsucursal);
       
  }

  public setSucursal(IDsucursal:number,nuevaSucursal:Sucursal) {
    

    let i: number = 0;
  while (
  i < this.sucursales.length &&
  this.sucursales[i].IDsucursal != IDsucursal
    ) {
  i++;
    }
  if (this.sucursales[i].IDsucursal===IDsucursal) {
  this.sucursales[i]=nuevaSucursal
  console.log("se cambio la sucursal");
  }else{
  console.log("no se encontro la sucursal");
  }
    
  }

  public getProveedor(IDproveedor:number) {
    return this.proveedores.find(Element=>Element.getIDProveedor()===IDproveedor);
  }

  public setProveedor(IDproveedor:number,nuevoProveedor:Proveedor) {
    let i: number = 0;
    while (
    i < this.proveedores.length &&
    this.proveedores[i].getIDProveedor() != IDproveedor
      ) {
    i++;
      }
    if (this.proveedores[i].getIDProveedor()===IDproveedor) {
    this.proveedores[i]=nuevoProveedor
    console.log("se cambio el proveedor");
    }else{
    console.log("no se encontro el Proveedor");
    }
      
  }

  public borrarSucursal(IDsucursal:number) {
    
    let i: number = 0;
  while (
  i < this.sucursales.length &&
  this.sucursales[i].IDsucursal != IDsucursal
    ) {
  i++;
    }
  if (this.sucursales[i].IDsucursal===IDsucursal) {
   this.sucursales.splice(i,1)
  console.log("se elimino la sucursal");
  }else{
  console.log("no se encontro la sucursal a eliminar");
  }
  }

  public borrarProveedor(IDproveedor:number) {
    let i: number = 0;
    while (
    i < this.proveedores.length &&
    this.proveedores[i].getIDProveedor() != IDproveedor
      ) {
    i++;
      }
    if (this.proveedores[i].getIDProveedor()===IDproveedor) {
    this.proveedores.splice(i,1)
    console.log("se elimino el proveedor");
    }else{
    console.log("no se encontro el Proveedor a eliminar");
    }
  }

  public listarSucursal():Array<Sucursal> {
    return this.sucursales
  }

  public listarProveedor():Array<Proveedor> {
    return this.proveedores
  }
}
