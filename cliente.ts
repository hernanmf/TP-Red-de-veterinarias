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
  public setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
  public getTelefono(): number {
    return this.telefono;
  }
  public setTelefono(nuevoTelefono: number) {
    this.telefono = nuevoTelefono;
  }
  public getEsVip(): boolean {
    return this.esVip;
  }
<<<<<<< HEAD
  public getPaciente(id: number) {
    for (let i = 0; i < this.pacientes.length; i++) {
      if (id === this.pacientes[i].getIDpaciente()) {
        return this.pacientes[i];
      }
    }
  }
=======
>>>>>>> hernan
  public getCantidadVisitas(): number {
    return this.cantidadVisitas;
  }
  public registrarVisita() {
    this.cantidadVisitas++;
  }
  public getPaciente(id_Cliente: number, nombrePaciente: string) {
    /* for (let i = 0; i < this.pacientes.length; i++) {
      if (id_Cliente === this.pacientes[i].getIDdueño()) {
        return this.pacientes[i].getPacientes(nombrePaciente);
      }
    } */
    return this.pacientes.find(
      (Element) =>
        Element.getIDPaciente() === id_Cliente &&
        Element.getNombre() === nombrePaciente
    );
  }

  public listarPacientes(): Array<Paciente> {
    return this.pacientes.filter(
      (Element) => Element.getIDPaciente() === this.id_Cliente
    );
    /*     return this.pacientes;
     */
  }

  public setPaciente(
    nombrePaciente: string,
    IDPaciente: number,
    nuevoPaciente: Paciente
  ) {
    let existiaPaciente: boolean = false;
    for (let i: number = 0; i < this.pacientes.length; i++) {
      if (
        this.pacientes[i].getNombre() === nombrePaciente &&
        this.pacientes[i].getIDPaciente() === IDPaciente
      ) {
        this.pacientes[i] = nuevoPaciente;
        existiaPaciente = true;
      }
    }
    if (existiaPaciente) {
      console.clear();
      console.log("MODIFICACION REALIZADA");
    } else {
      console.log(
        "EL PACIENTE NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTAR"
      );
    }
  }

<<<<<<< HEAD
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
=======
  public borrarPaciente(nombrePaciente: string, IDPaciente: number) {
    let existiaPaciente: boolean = false;
    for (let i: number = 0; i < this.pacientes.length; i++) {
      if (
        this.pacientes[i].getNombre() === nombrePaciente &&
        this.pacientes[i].getIDPaciente() === IDPaciente
>>>>>>> hernan
      ) {
        this.pacientes.splice(i, 1);
        existiaPaciente = true;
      }
    }
    if (existiaPaciente) {
      console.clear();
      console.log("EL PACIENTE HA SIDO ELIMINADO");
    } else {
      console.log(
        "EL PACIENTE NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTAR"
      );
    }
  }

  public agregarPaciente(paciente: Paciente) {
    this.pacientes.push(paciente);
  }
}
