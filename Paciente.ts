export default class Paciente {
  private IDdueño: number;
  private Nombre: string;
  private Especie: string;
  private HistoriaClinica: Array<string>;

  constructor(
    IDdueño: number,
    Nombre: string,
    Especie: string,
    HistoriaClinica: Array<string>
  ) {
    this.IDdueño = IDdueño;
    this.Nombre = Nombre;
    this.Especie = Especie;
    this.HistoriaClinica = HistoriaClinica;
  }

  public getIDdueño(): number {
    return this.IDdueño;
  }
  public getNombre(): string {
    return this.Nombre;
  }
  public getEspecie(): string {
    return this.Especie;
  }
  public getHistoriaClinica(): Array<string> {
    return this.HistoriaClinica;
  }

  public setNombre(Nombre: string): void {
    this.Nombre = Nombre;
  }
  public setEspecie(Especie: string): void {
    this.Especie = Especie;
  }

  public addHistoriaClinica(NuevaHistoria: string): void {
    this.HistoriaClinica.push(NuevaHistoria);
  }
}
