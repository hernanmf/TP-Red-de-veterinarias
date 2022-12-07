import Paciente from "./Paciente";

export default class Cliente {
  private id_Cliente: number;
  private nombre: string;
  private telefono: number;
  private esVip: boolean;
  private cantidadVisitas: number;
  private pacientes: Array<Paciente>;

  public constructor(
    id_Cliente: number,
    nombre: string,
    telefono: number,
    esVip: boolean,
    cantidadVisitas: number,
    pacientes: Array<Paciente>
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
  public getPaciente(id: number) {
    for (let i = 0; i < this.pacientes.length; i++) {
      if (id === this.pacientes[i].getIDpaciente()) {
        return this.pacientes[i];
      }
    }
  }
  public getCantidadVisitas(): number {
    return this.cantidadVisitas;
  }
  public setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
  public setTelefono(nuevoTelefono: number) {
    this.telefono = nuevoTelefono;
  }

  public setPaciente(IDpaciente: number, nuevoPaciente: Paciente) {
    let i: number = 0;
    while (
      i < this.pacientes.length &&
      this.pacientes[i].getIDpaciente() != IDpaciente
    ) {
      i++;
    }
    if (i < this.pacientes.length) {
      this.pacientes[i] = nuevoPaciente;
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
  }

  public registrarVisita() {
    this.cantidadVisitas++;
  }

  public listarPacientes(): Array<Paciente> {
    return this.pacientes;
  }

  public borrarPaciente(idPaciente: number) {
    for (let i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].getIDpaciente() === idPaciente
      
      ) {

        this.pacientes.splice(i, 1);
        return console.log("El Paciente ha sido borrado");
      } else if (
        i === this.pacientes.length - 1 &&
        idPaciente != this.pacientes[i].getIDpaciente()
      ) {
        return console.log(
          `El id de Paciente ${idPaciente} no fue encontrado.`
        );
      }
    }
  }
  /*   public borrarPaciente(arregloPaciente:<Paciente>, nombrePaciente:string){

     } */
}
