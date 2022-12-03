export default class Paciente {
  private IDpaciente: number;
  private Nombre: string;
  private Especie: string;

  constructor(IDpaciente: number, Nombre: string, Especie: string) {
    this.IDpaciente = IDpaciente;
    this.Nombre = Nombre;
    this.Especie = Especie;
  }

  public getIDpaciente(): number {
    return this.IDpaciente;
  }
  public getNombre(): string {
    return this.Nombre;
  }
  public getEspecie(): string {
    return this.Especie;
  }

  public setNombre(Nombre: string): void {
    this.Nombre = Nombre;
  }
  public setEspecie(Especie: string): void {
    this.Especie = Especie;
  }
}
