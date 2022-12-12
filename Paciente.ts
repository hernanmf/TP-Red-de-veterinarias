export default class Paciente {
  private IDPaciente: number;
  private Nombre: string;
  private Especie: string;

  constructor(IDPaciente: number, Nombre: string, Especie: string) {
    this.IDPaciente = IDPaciente;
    this.Nombre = Nombre;
    this.Especie = Especie;
  }

  public getIDPaciente(): number {
    return this.IDPaciente;
  }

  public getNombre(): string {
    return this.Nombre;
  }

  public setNombre(Nombre: string): void {
    this.Nombre = Nombre;
  }

  public getEspecie(): string {
    return this.Especie;
  }

  public setEspecie(Especie: string): void {
    this.Especie = Especie;
  }
}
