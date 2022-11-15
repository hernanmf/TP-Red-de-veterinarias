export class Proveedor {
  private IDproveedor: number;
  private Nombre: string;
  private Telefono: number;

  constructor(IDproveedor: number, Nombre: string, Telefono: number) {
    this.IDproveedor = IDproveedor;
    this.Nombre = Nombre;
    this.Telefono = Telefono;
  }

  public getIDProveedor(): number {
    return this.IDproveedor;
  }
  public getNombre(): string {
    return this.Nombre;
  }
  public getTelefono(): number {
    return this.Telefono;
  }

  public setNombre(Nombre: string): void {
    this.Nombre = Nombre;
  }
  public setTelefono(Telefono: number): void {
    this.Telefono = Telefono;
  }
}
