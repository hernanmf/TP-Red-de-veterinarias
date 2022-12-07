import Cliente from "./cliente";
import Paciente from "./Paciente";
import Proveedor from "./Proveedor";
import Sucursal from "./sucursales";
import Veterinarias from "./veterinarias";
import generadorDeID from "./generadorId";
import {
  LectorArchivos,
  crearCliente,
  crearPaciente,
  crearProveedor,
  crearSucursal,
} from "./GestorDeArchivos";

/* import * as fs from "fs"; */
import * as ReadFileSync from "readline-sync";
import * as ReadlineSync from "readline-sync";
import Veterinaria from "./veterinarias";
import generadorDeId from "./generadorId";

//Cargamos los arreglos clientes, pacientes y proveedores--->
let datosSucursales: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/sucursales.txt"
);
let arregloSucursales: Array<Sucursal> = [];

let datosClientes: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/clientes.txt"
);
let arregloClientes: Array<Cliente> = [];
let datosPacientes: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/paciente.txt"
);
let arregloPacientes: Array<Paciente> = [];
let datosProveedor: LectorArchivos = new LectorArchivos(
  "./baseDeDatos/proveedores.txt"
);
let arregloProveedor: Array<Proveedor> = [];
let arregloHistClinica: Array<string> = [];
let arregloIdSucursal: Array<number>=[];
let arregloIdCliente: Array<number>=[];
let arregloIdProveedor: Array<number>=[];

for (let i: number = 0; i < datosClientes.getArregloString().length; i++) {
  crearCliente(
    datosClientes.getArregloString()[i],
    arregloClientes,
    arregloPacientes,
    arregloIdCliente
  );
}
for (let i: number = 0; i < datosPacientes.getArregloString().length; i++) {
  crearPaciente(
    datosPacientes.getArregloString()[i],
    arregloPacientes,
    arregloHistClinica
  );
}
for (let i: number = 0; i < datosProveedor.getArregloString().length; i++) {
  crearProveedor(datosProveedor.getArregloString()[i], arregloProveedor);
}

for (let i: number = 0; i < datosSucursales.getArregloString().length; i++) {
  crearSucursal(datosSucursales.getArregloString()[i], arregloSucursales,arregloIdSucursal);
}
var veterinariaInstanciada = new Veterinaria(
  "Camerun Soft",
  arregloSucursales,
  arregloProveedor
);

var sucursalInstanciada: Sucursal/* =arregloSucursales[0] */;
var clienteInstanciado: Cliente/* =arregloClientes[2] */;

/* menues en funcion */
export function menuBienvenida(): void {
  let opcionMenuBienvenida: number = Number(8);
  while (opcionMenuBienvenida != Number(0)) {
    console.clear();
    console.log("------------------------- ");
    console.log("BIENVENIDOS A CAMERUNSOFT");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ver Proveedores");
    console.log("2 - Ver Sucursales");
    console.log(" ");
    console.log("------------------------- ");
    console.log("0 - Salir");
    console.log("------------------------- ");
    opcionMenuBienvenida = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuBienvenida) {
      case 1:
        /* console.clear(); */
        menuProveedores();
        break;
      case 2:
        /* console.clear(); */
        menuSucursales();
        break;
      case 0:
        /* console.clear(); */
        console.log("FIN DEL PROGRAMA");
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuProveedores(): void {
  let opcionMenuProveedores: number = Number(8);
  while (opcionMenuProveedores != Number(9)) {
    /* ß */
    console.log("------------------------- ");
    console.log("PROVEEDORES");
    console.log("------------------------- ");
    console.log(" ");
    mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Modificar proveedor");
    console.log("2 - Borrar proveedor");
    console.log("3 - Nuevo proveedor");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuProveedores = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );
    console.clear;

    switch (opcionMenuProveedores) {
      case 1:
        /* console.clear(); */
        mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
        menuModificarProveedor();
        break;
      case 2:
        /* console.clear(); */
        mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
        menuBorrarProveedor();
        break;
      case 3:
        menuNuevoProveedor();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuModificarProveedor(): void {
  let IDaCambiar: number = Number(
    ReadlineSync.question(
      "Ingrese el id del proveedor que desea cambiar(0 para cancelar operacion): "
    )
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    let NvoProveedor: Proveedor;
    let NvoNombre: string = ReadlineSync.question(
      "Nuevo nombre para el proveedor, si no cambia, ingrese el mismo: "
    );
    let nvoTelefono: number = Number(
      ReadlineSync.questionInt(
        "Nuevo telefono para el proveedor, si no cambia, ingrese el mismo: "
      )
    );
    NvoProveedor = new Proveedor(IDaCambiar, NvoNombre, nvoTelefono);
    veterinariaInstanciada.setProveedor(IDaCambiar, NvoProveedor);
  }
}

function mostrarListaProveedores(lista: Array<Proveedor>): void {
  console.log("ID Proveedor / Nombre / Telefono");
  console.log(" ");
  for (let i: number = 0; i < lista.length; i++) {
    console.log(
      lista[i].getIDProveedor() +
        " / " +
        lista[i].getNombre() +
        " / " +
        lista[i].getTelefono()
    );
  }
  console.log(" ");
}

function menuBorrarProveedor() {
  let IDaCambiar: number = Number(
    ReadlineSync.questionInt("Ingrese el id del Proveedor a borrar: ")
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
  } else {
    veterinariaInstanciada.borrarProveedor(IDaCambiar);
  }
}
function menuNuevoProveedor(): void {
 let IDproveedor: number= generadorDeId(arregloIdProveedor);
 let Nombre: string= ReadlineSync.question("Ingrese el nombre del nuevo proveedor");
 let Telefono: number= ReadlineSync.questionInt("Ingrese el numero de telefono del nuevo proveedor");
 let nuevoProveedor= new Proveedor(IDproveedor,Nombre,Telefono);
 arregloProveedor.push(nuevoProveedor);
}

function menuSucursales(): void {
  let opcionMenuSucursal: number = Number(8);
  while (opcionMenuSucursal != Number(9)) {
    /* console.clear(); */
    console.log("------------------------- ");
    console.log("SUCURSALES");
    console.log("------------------------- ");
    console.log(" ");
    mostrarListaSucursales(veterinariaInstanciada.listarSucursal());
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ingresar a sucursal");
    console.log("2 - Modificar sucursal");
    console.log("3 - Borrar sucursal");
    console.log("4 - Nueva sucursal");
    console.log(" ");
   console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuSucursal = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuSucursal) {
      case 1:
        menuEntrarASucursal(/* sucursalInstanciada */);
        break;
      case 2:
        menuModificarSucursal(sucursalInstanciada);
        break;
      case 3:
        menuBorrarSucursal();
        break;
      case 4:
        menuNuevaSucursal();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuEntrarASucursal(/* sucursalInstanciada:Sucursal */) {
  let IDSucursalAInstanciar: number = Number(
    ReadlineSync.questionInt(
      "Ingrese el id de la sucursal a la que desea ingresar(0 para cancelar operacion): "
    )
  );
  if (IDSucursalAInstanciar != 0) {
    let i: number = 0;
    let listaDeSucursales: Array<Sucursal> =
      veterinariaInstanciada.listarSucursal();
    while (
      i < listaDeSucursales.length /*-1*/ &&
      listaDeSucursales[i].getIDsucursal() != IDSucursalAInstanciar
    ) {
      i++;
    }
    if (i < listaDeSucursales.length /*- 1*/) {
      sucursalInstanciada = veterinariaInstanciada.getSucursal(
        IDSucursalAInstanciar
      );
      menuEnSucursal();
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
  }
}

function menuModificarSucursal(sucursalInstanciada) {
  let IDaCambiar: number = Number(
    ReadlineSync.question(
      "Ingrese el id de la sucursal que desea cambiar(0 para cancelar operacion): "
    )
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    let nuevaSucursal: Sucursal;
    let nuevaDireccion: string = ReadlineSync.question(
      "Ingrese la nueva direccion de la sucursal, si no cambia, ingrese la misma: "
    );
    let nuevoTelefono: number = Number(
      ReadlineSync.questionInt(
        "Ingrese el nuevo telefono de la sucursal, si no cambia, ingrese el mismo: "
      )
    );
    nuevaSucursal = new Sucursal(
      IDaCambiar,
      nuevaDireccion,
      nuevoTelefono,
      sucursalInstanciada.listarClientes()
    );
    veterinariaInstanciada.setSucursal(IDaCambiar, nuevaSucursal);
  }
}

function menuBorrarSucursal() {
  let IDaCambiar: number = Number(
    ReadlineSync.questionInt("Ingrese el id de la sucursal a borrar: ")
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
  } else {
    veterinariaInstanciada.borrarSucursal(IDaCambiar);
  }
}
//Funcion que genera una nueva Sucursal desde consola
function nuevaSucursal(arregloSucursales:Array<Sucursal>, arregloCliente:Array<Cliente>,arregloIdSucursal:Array<number>): void {
  let IDSucursal : number= generadorDeID(arregloIdSucursal);
  let direccionSucursal : string = ReadlineSync.question(" Ingrese la direccion de la nueva Sucursal:  ");
  let telefonoSucursal: number = Number(ReadlineSync.question("Ingrese el telefono de la Sucursal:   "));
  let listaSucursal : Array<Sucursal> = arregloSucursales;
  let nuevaSucursal : Sucursal= new Sucursal(IDSucursal,direccionSucursal,telefonoSucursal,arregloCliente);
  listaSucursal.push(nuevaSucursal);
}

//Menu de una Nueva Sucursal
function menuNuevaSucursal(): void {
  console.clear();
  console.log("---------------------------");
  console.log(" Ingresar nueva Sucursal");
  console.log("---------------------------");
  console.log("");
  nuevaSucursal(arregloSucursales,arregloClientes,arregloIdSucursal);

}



function mostrarListaSucursales(lista: Array<Sucursal>): void {
  console.log("ID Sucursal / Direccion / Telefono");
  console.log(" ");
  for (let i: number = 0; i < lista.length; i++) {
    console.log(
      lista[i].getIDsucursal() +
        " / " +
        lista[i].getDireccion() +
        " / " +
        lista[i].getTelefono()
    );
  }
  console.log(" ");
}

function menuEnSucursal() {
  let opcionMenuEnSucursal: number = Number(8);
  while (opcionMenuEnSucursal != Number(9)) {
    /* console.clear(); */
    console.log("------------------------- ");
    console.log(
      "ID Sucursal: " +
        sucursalInstanciada.getIDsucursal() +
        " Direccion: " +
        sucursalInstanciada.getDireccion() +
        " Telefono: " +
        sucursalInstanciada.getTelefono()
    );
    console.log("------------------------- ");
    console.log(" ");
    mostrarListaClientes(sucursalInstanciada.listarClientes());
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Listar clientes");
    console.log("2 - Listar pacientes");
    console.log("3 - Ingresar a cliente");
    console.log("4 - Borrar cliente");
    console.log("5 - Nuevo cliente");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuEnSucursal = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuEnSucursal) {
      case 1:
        mostrarListaClientes(sucursalInstanciada.listarClientes());
        break;
      case 2:
        /* LISTAR PACIENTES */
        break;
      case 3:
        menuEntrarACliente(clienteInstanciado);
        break;
      case 4:
        menuBorrarCliente();
        break;
      case 5:
        menuNuevoCliente();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function mostrarListaClientes(lista: Array<Cliente>): void {
  console.log("CLIENTES");
  console.log(
    "ID Cliente / Nombre / Telefono / Cantidad de visitas / ¿Es vip?"
  );
  console.log(" ");
  for (let i: number = 0; i < lista.length; i++) {
    console.log(
      lista[i].getIdCliente() +
        " / " +
        lista[i].getNombre() +
        " / " +
        lista[i].getTelefono() +
        " / " +
        lista[i].getCantidadVisitas() +
        " / " +
        lista[i].getEsVip()
    );
  }
  console.log(" ");
}

function menuBorrarCliente() {
  let IDaCambiar: number = Number(
    ReadlineSync.questionInt("Ingrese el id del Cliente a borrar: ")
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
  } else {
    sucursalInstanciada.borrarCliente(IDaCambiar);
  }
}

//Funcion que genera un nuevo Cliente desde consola
function nuevoCliente(arregloCliente:Array<Cliente>, arregloPacientes:Array<Paciente>,arregloIdCliente:Array<number>): void {
  let IDCliente : number= generadorDeID(arregloIdCliente);
  let nombreCliente : string = ReadlineSync.question(" Ingrese Nombre y Apellido del nuevo Cliente:  ");
  let telefonoCliente: number = Number(ReadlineSync.question("Ingrese el telefono del Cliente:   "));
  let listaCliente : Array<Cliente> = arregloCliente;
  let nuevoCliente : Cliente = new Cliente(IDCliente,nombreCliente,telefonoCliente,false,0,arregloPacientes);
  listaCliente.push(nuevoCliente);
  arregloIdCliente.push(IDCliente);
}

//Menu de un Nuevo Cliente
function menuNuevoCliente(): void {
  
  console.clear();
  console.log("---------------------------");
  console.log(" Ingresar nuevo Cliente");
  console.log("---------------------------");
  console.log("");
  nuevoCliente(arregloClientes, arregloPacientes,arregloIdCliente);

}

function menuEntrarACliente(clienteInstanciado:Cliente) {
  let IDClienteAInstanciar: number = Number(
    ReadlineSync.questionInt(
      "Ingrese el id del cliente al que desea ingresar(0 para cancelar operacion): "
    )
  );
  if (IDClienteAInstanciar != 0) {
    let i: number = 0;
    let listaDeClientes: Array<Cliente> = sucursalInstanciada.listarClientes();
    while (
      i < listaDeClientes.length &&
      listaDeClientes[i].getIdCliente() != IDClienteAInstanciar
    ) {
      i++;
    }
    if (i < listaDeClientes.length) {
      clienteInstanciado = sucursalInstanciada.getCliente(/* listaDeClientes[i].getIdCliente() */IDClienteAInstanciar);
      menuEnCliente();
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
  }
}

function menuEnCliente(): void {
  let opcionMenuEnCliente: number = Number(8);
  let listaDePacientes: Array<Paciente> = clienteInstanciado.listarPacientes();
  while (opcionMenuEnCliente != Number(9)) {
    /* console.clear(); */
    console.log("------------------------- ");
    console.log(
      "ID Cliente: " +
        clienteInstanciado.getIdCliente() +
        " Nombre: " +
        clienteInstanciado.getNombre() +
        " Telefono: " +
        clienteInstanciado.getTelefono() +
        " Es Vip?: " +
        clienteInstanciado.getEsVip() +
        " Visitas: " +
        clienteInstanciado.getCantidadVisitas()
    );
    console.log(" ");
    console.log("ID Paciente / Nombre / Especie");
    for (let i: number = 0; i < listaDePacientes.length; i++) {
      console.log(
        listaDePacientes[i].getIDpaciente() +
          " / " +
          listaDePacientes[i].getNombre() +
          " / " +
          listaDePacientes[i].getEspecie()
      );
    }
    console.log(" ");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Registrar visita");
    console.log("2 - Modificar datos");
    console.log("3 - Listar pacientes");
    console.log("4 - Modificar paciente");
    console.log("5 - Borrar paciente");
    console.log("6 - Nuevo paciente");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuEnCliente = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuEnCliente) {
      case 1:
        menuRegistrarVisita();
        break;
      case 2:
        menuModificarCliente();
        break;
      case 3:
        menuListarPacientes()
        break; 
      case 4:
        menuModificarPaciente();
        break;
      case 5:
        menuBorrarPaciente();
        break;
      case 6:
        menuNuevoPaciente();
        break;
      default:
        console.log("Opcion erronea");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuModificarCliente(): void {
  let nuevoCliente: Cliente;
  let nuevoNombre: string = ReadlineSync.question(
    "Ingrese el nuevo nombre del cliente, si no cambia, ingrese el mismo: "
  );
  let nuevoTelefono: number = Number(
    ReadlineSync.questionInt(
      "Ingrese el nuevo telefono del cliente, si no cambia, ingrese el mismo: "
    )
  );
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.questionInt("Esta seguro de realizar los cambios? 1-Si 2-No")
    );
  }
  if (estaSeguro == 1) {
    nuevoCliente = new Cliente(
      clienteInstanciado.getIdCliente(),
      nuevoNombre,
      nuevoTelefono,
      clienteInstanciado.getEsVip(),
      clienteInstanciado.getCantidadVisitas(),
      clienteInstanciado.listarPacientes()
    );
    sucursalInstanciada.setCliente(
      clienteInstanciado.getIdCliente(),
      nuevoCliente
    );
    console.log("CAMBIOS GUARDADOS");
  } else {
    console.log("CAMBIOS DESCARTADOS");
  }
}

function menuModificarPaciente() {
  let IDaCambiar: number = Number(
    ReadlineSync.question(
      "Ingrese el id del paciente que desea cambiar(0 para cancelar operacion): "
    )
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    let nuevoPaciente: Paciente;
    let nuevoNombre: string = ReadlineSync.question(
      "Ingrese el nuevo nombre del paciente, si no cambia, ingrese el mismo: "
    );
    nuevoPaciente = new Paciente(
      IDaCambiar,
      nuevoNombre,
      clienteInstanciado.getPaciente(IDaCambiar).getEspecie()
    );
    clienteInstanciado.setPaciente(IDaCambiar, nuevoPaciente);
  }
}

function menuRegistrarVisita() {
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.question(
        "El cliente tiene " +
          clienteInstanciado.getCantidadVisitas() +
          " visitas, esta seguro que desea registrar una visita nueva? 1-Si 2-No"
      )
    );
  }
  if (estaSeguro == 1) {
    clienteInstanciado.registrarVisita();
    console.log(
      "VISITA REGISTRADA!! GRACIAS POR ELEGIRNOS!! VUELVA PRONTOOOSSSSS"
    );
  } else {
    console.log("LA VISITA NO SE HA REGISTRADO");
  }
}

function menuBorrarPaciente() {
  let IDaCambiar: number = Number(
    ReadlineSync.questionInt("Ingrese el id del Paciente a borrar: ")
  );
  if (IDaCambiar === 0) {
    console.log("MODIFICACION CANCELADA");
  } else {
    clienteInstanciado.borrarPaciente(IDaCambiar);
  }
}

function menuListarPacientes(){
  for (let i=0;i<clienteInstanciado.listarPacientes().length;i++){
    console.log(`Nombre del paciente: ${clienteInstanciado.listarPacientes()[i].getNombre()}`)
    console.log(`Especie del paciente: ${clienteInstanciado.listarPacientes()[i].getEspecie()}`)
    console.log(`ID del Cliente: ${clienteInstanciado.listarPacientes()[i].getIDpaciente()}`)  
  }
}

//Funcion que genera un nuevo Paciente desde consola
function nuevoPaciente(IDDueño: number, arregloPacientes:Array<Paciente>, arregloHistoriaClinica:Array<string>): void {
  let IDDueñoPaciente : number = IDDueño;
  let nombrePaciente : string = ReadlineSync.question(" Ingrese el Nombre del Paciente:   ");
  let especie : string = ReadlineSync.question(" Ingrese la especie del Paciente---(GATO/PERRO/EXOTICA):   ");
  let listaPaciente : Array<Paciente> = arregloPacientes;
  let nuevoPaciente: Paciente = new Paciente(IDDueñoPaciente,nombrePaciente,especie);
  listaPaciente.push(nuevoPaciente);   
}
//Menu de un nuevo Paciente
function menuNuevoPaciente(): void {
  console.clear();
  console.log("---------------------------");
  console.log(" Ingresar nuevo Paciente");
  console.log("---------------------------");
  console.log("");
  nuevoPaciente(this.IDdueño ,arregloPacientes,arregloHistClinica);
}

//INICIO DEL PROGRAMA

/* CARGA DE BBDD */

menuBienvenida();

/* GUARDADO DE BBDD */
