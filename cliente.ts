import Paciente from "./Paciente";

export default class Cliente{
    public id_Cliente : number;
    public nombre :  string;
    public telefono : number;
    public esVip : boolean;
    public cantidadVisitas :  number;
    public pacientes : Array<Paciente>;
    


     public constructor(
    id_Cliente: number,
    nombre: string,
    telefono: number,
    esVip: boolean,
    cantidadVisitas: number,
    pacientes: Array<Paciente>,
    
  ) {
    this.id_Cliente = id_Cliente;
    this.nombre = nombre;
    this.telefono = telefono;
    this.esVip = esVip;
    this.cantidadVisitas = cantidadVisitas;
    this.pacientes = pacientes;
    
  }
  public getIdCliente(): number {
    return this.id_Cliente;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public getTelefono(): number {
    return this.telefono;
  }
  public getEsVip(): boolean {
    return this.esVip;
  }
  public getPacientes(n): Paciente {
    return this.pacientes[n];
  }
  public getCantidadVisitas(): number {
    return this.cantidadVisitas;
  }
  public setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
  public setTelefone(nuevoTelefono: number) {
    this.telefono = nuevoTelefono;
  }
  /* public setPaciente(nuevoPaciente: Paciente) {
    this.pacientes = nuevoPaciente;
  } */
  public registrarVisita() {
    this.cantidadVisitas++;
  }

  public listarPacientes(): Array<Paciente> {
    return this.pacientes;
  }
  /*   public borrarPaciente(arregloPaciente:<Paciente>, nombrePaciente:string){

     } */
}
