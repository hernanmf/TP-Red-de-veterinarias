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
import { stringify } from "querystring";
import { Console } from "console";

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
for (let i: number = 0; i < datosClientes.getArregloString().length; i++) {
  crearCliente(
    datosClientes.getArregloString()[i],
    arregloClientes,
    arregloPacientes,
    arregloIdCliente
  );
}
for (let i: number = 0; i < datosPacientes.getArregloString().length; i++) {
  crearPaciente(datosPacientes.getArregloString()[i], arregloPacientes);
}
for (let i: number = 0; i < datosProveedor.getArregloString().length; i++) {
  crearProveedor(datosProveedor.getArregloString()[i], arregloProveedor);
}

for (let i: number = 0; i < datosSucursales.getArregloString().length; i++) {
  crearSucursal(
    datosSucursales.getArregloString()[i],
    arregloSucursales,
    arregloIdSucursal
  );
}
var veterinariaInstanciada = new Veterinaria(
  "Camerun Soft",
  arregloSucursales,
  arregloProveedor,
  arregloClientes
);
var arregloDeId: Array<number> = [
  50, 365, 898, 555, 222, 120, 10, 87, 180, 345, 900, 610, 121, 237, 122,
];

var clienteInstanciado: Cliente;

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
    console.log("3 - Ver Clientes");
    console.log(" ");
    console.log("------------------------- ");
    console.log("0 - Salir");
    console.log("------------------------- ");
    opcionMenuBienvenida = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuBienvenida) {
      case 1:
        console.clear();
        menuProveedores();
        break;
      case 2:
        console.clear();
        menuSucursales();
        break;
      case 3:
        console.clear();
        menuClientes();
        break;
      case 0:
        /* console.clear(); */
        console.log("FIN DEL PROGRAMA");
        break;
      default:
        console.log("OPCION ERRONEA");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuClientes(): void {
  let opcionMenuClientes: number = Number(8);
  while (opcionMenuClientes != Number(9)) {
    console.log("------------------------- ");
    console.log("CLIENTES");
    console.log("------------------------- ");
    console.log(" ");
    mostrarListaClientes(veterinariaInstanciada.listarClientes());
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Ingresar a cliente");
    console.log("2 - Borrar cliente");
    console.log("3 - Nuevo cliente");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuClientes = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuClientes) {
      case 1:
        menuEntrarACliente();
        break;
      case 2:
        menuBorrarCliente();
        break;
      case 3:
        menuNuevoCliente();
        break;
      default:
        console.log("OPCION ERRONEA");
        setTimeout(() => {
          console.log(" ");
        }, 2000);
        break;
    }
  }
}

function menuNuevoCliente(): void {
  console.clear();
  console.log("----------------------");
  console.log("Ingresar nuevo Cliente");
  console.log("----------------------");
  console.log("");
  let IDCliente: number = generadorDeID(arregloDeId);
  let nombreCliente: string = ReadlineSync.question(
    " Ingrese Nombre y Apellido del nuevo Cliente:  "
  );
  let telefonoCliente: number = Number(
    ReadlineSync.questionInt("Ingrese el telefono del Cliente: ")
  );
  let arregloPacientes: Array<Paciente> = [];
  let nuevoCliente: Cliente = new Cliente(
    IDCliente,
    nombreCliente.toUpperCase(),
    telefonoCliente,
    false,
    0,
    arregloPacientes
  );
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.questionInt(
        "Confirma el ingreso del nuevo cliente? 1-Si 2-No :"
      )
    );
  }
  if (estaSeguro == 1) {
    veterinariaInstanciada.agregarCliente(nuevoCliente);
    console.clear();
    console.log("EL CLIENTE HA SIDO CREADO");
  } else {
    console.log("LOS CAMBIOS NO SE HAN REALIZADO");
  }
}

function menuProveedores(): void {
  let opcionMenuProveedores: number = Number(8);
  while (opcionMenuProveedores != Number(9)) {
    console.log("--------------------------------");
    console.log("         PROVEEDORES");
    console.log("--------------------------------");
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
    console.clear();

    switch (opcionMenuProveedores) {
      case 1:
        mostrarListaProveedores(veterinariaInstanciada.listarProveedor());
        menuModificarProveedor();
        break;
      case 2:
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
    console.clear();
    console.log("MODIFICACION CANCELADA");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    let NvoProveedor: Proveedor;
    let NvoNombre: string = ReadlineSync.question(
      "Nuevo nombre para el proveedor, si no cambia, ingrese el mismo: "
    );
    NvoNombre = NvoNombre.toUpperCase();
    let nvoTelefono: number = Number(
      ReadlineSync.questionInt(
        "Nuevo telefono para el proveedor, si no cambia, ingrese el mismo: "
      )
    );
    let estaSeguro: number = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
      estaSeguro = Number(
        ReadlineSync.questionInt(
          "Confirma los cambios en el proveedor? 1-Si 2-No :"
        )
      );
    }
    if (estaSeguro == 1) {
      NvoProveedor = new Proveedor(IDaCambiar, NvoNombre, nvoTelefono);
      console.clear();
      veterinariaInstanciada.setProveedor(IDaCambiar, NvoProveedor);
    } else {
      console.log("LOS CAMBIOS SE HAN CANCELADO");
    }
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
  console.clear();
  console.log("------------------------");
  console.log("Ingresar nuevo Proveedor");
  console.log("------------------------");
  console.log("");
  let IDProveedor: number = generadorDeID(arregloDeId);
  let nombreProveedor: string = ReadlineSync.question(
    " Ingrese Nombre del nuevo Proveedor:  "
  );
  let telefonoProveedor: number = Number(
    ReadlineSync.questionInt("Ingrese el telefono del Proveedor: ")
  );
  let nuevoProveedor: Proveedor = new Proveedor(
    IDProveedor,
    nombreProveedor.toUpperCase(),
    telefonoProveedor
  );
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.questionInt(
        "Confirma el ingreso del nuevo proveedor? 1-Si 2-No :"
      )
    );
  }
  if (estaSeguro == 1) {
    veterinariaInstanciada.agregarProveedor(nuevoProveedor);
    console.clear();
    console.log("EL PROVEEDOR HA SIDO CREADO");
  } else {
    console.log("LOS CAMBIOS NO SE HAN REALIZADO");
  }
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
    console.log("1 - Modificar sucursal");
    console.log("2 - Borrar sucursal");
    console.log("3 - Nueva sucursal");
    console.log(" ");
    console.log("------------------------- ");
    console.log("9 - Atras");
    console.log("------------------------- ");
    opcionMenuSucursal = Number(
      ReadlineSync.questionInt("Ingrese una opcion: ")
    );

    switch (opcionMenuSucursal) {
      case 1:
        menuModificarSucursal();
        break;
      case 2:
        menuBorrarSucursal();
        break;
      case 3:
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

function menuModificarSucursal() {
  console.clear();
  mostrarListaSucursales(veterinariaInstanciada.listarSucursal());
  let IDaCambiar: number = Number(
    ReadlineSync.question(
      "Ingrese el id de la sucursal que desea cambiar(0 para cancelar operacion): "
    )
  );
  if (IDaCambiar === 0) {
    console.clear();
    console.log("MODIFICACION CANCELADA");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    let nuevaSucursal: Sucursal;
    let nuevaDireccion: string = ReadlineSync.question(
      "Ingrese la nueva direccion de la sucursal, si no cambia, ingrese la misma: "
    );
    nuevaDireccion = nuevaDireccion.toUpperCase();
    let nuevoTelefono: number = Number(
      ReadlineSync.questionInt(
        "Ingrese el nuevo telefono de la sucursal, si no cambia, ingrese el mismo: "
      )
    );
    nuevaSucursal = new Sucursal(IDaCambiar, nuevaDireccion, nuevoTelefono);
    veterinariaInstanciada.setSucursal(IDaCambiar, nuevaSucursal);
  }
}

function menuBorrarSucursal() {
  console.clear();
  mostrarListaSucursales(veterinariaInstanciada.listarSucursal());
  let IDaCambiar: number = Number(
    ReadlineSync.questionInt("Ingrese el id de la sucursal a borrar: ")
  );
  if (IDaCambiar === 0) {
    console.clear();
    console.log("MODIFICACION CANCELADA");
  } else {
    veterinariaInstanciada.borrarSucursal(IDaCambiar);
  }
}
//Funcion que genera una nueva Sucursal desde consola
function nuevaSucursal(
  arregloSucursales: Array<Sucursal>,
  arregloCliente: Array<Cliente>,
  arregloIdSucursal: Array<number>
): void {
  let IDSucursal: number = generadorDeID(arregloIdSucursal);
  let direccionSucursal: string = ReadlineSync.question(
    " Ingrese la direccion de la nueva Sucursal:  "
  );
  let telefonoSucursal: number = Number(
    ReadlineSync.question("Ingrese el telefono de la Sucursal:   ")
  );
  let listaSucursal: Array<Sucursal> = arregloSucursales;
  let nuevaSucursal: Sucursal = new Sucursal(
    IDSucursal,
    direccionSucursal,
    telefonoSucursal,
    arregloCliente
  );
  listaSucursal.push(nuevaSucursal);
}

//Menu de una Nueva Sucursal
function menuNuevaSucursal(): void {
  console.clear();
  console.log("---------------------------");
  console.log(" Ingresar nueva Sucursal");
  console.log("---------------------------");
  console.log("");
  nuevaSucursal(arregloSucursales, arregloClientes, arregloIdSucursal);
}

function menuNuevaSucursal(): void {
  console.clear();
  console.log("------------------------");
  console.log("Ingresar nueva Sucursal");
  console.log("------------------------");
  console.log("");
  let IDSucursal: number = generadorDeID(arregloDeId);
  let direccionSucursal: string = ReadlineSync.question(
    " Ingrese direccion de la nueva sucursal:  "
  );
  let telefonoSucursal: number = Number(
    ReadlineSync.questionInt("Ingrese el telefono del Sucursal: ")
  );
  let nuevaSucursal: Sucursal = new Sucursal(
    IDSucursal,
    direccionSucursal.toUpperCase(),
    telefonoSucursal
  );
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.questionInt(
        "Confirma el ingreso del nuevo Sucursal? 1-Si 2-No :"
      )
    );
  }
  if (estaSeguro == 1) {
    veterinariaInstanciada.agregarSucursal(nuevaSucursal);
    console.clear();
    console.log("LA SUCURSAL HA SIDO CREADA");
  } else {
    console.log("LOS CAMBIOS NO SE HAN REALIZADO");
  }
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
    console.clear();
    console.log("MODIFICACION CANCELADA");
  } else {
    veterinariaInstanciada.borrarCliente(IDaCambiar);
  }
}

function menuEntrarACliente() {
  let IDClienteAInstanciar: number = Number(
    ReadlineSync.questionInt(
      "Ingrese el id del cliente al que desea ingresar(0 para cancelar operacion): "
    )
  );
  if (IDClienteAInstanciar != 0) {
    if (veterinariaInstanciada.getCliente(IDClienteAInstanciar) != null) {
      console.clear();
      clienteInstanciado =
        veterinariaInstanciada.getCliente(IDClienteAInstanciar);
      menuEnCliente(clienteInstanciado);
    } else {
      console.log(
        "EL ID INGRESADO NO EXISTE, REVISE LOS DATOS Y VUELVA A INTENTARLO"
      );
    }
  }
}

function menuEnCliente(clienteInstanciado: Cliente): void {
  let opcionMenuEnCliente: number = Number(8);
  while (opcionMenuEnCliente != Number(9)) {
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
    if (clienteInstanciado.listarPacientes() != null) {
      console.log(" ");
      console.log("Nombre / Especie");
      for (
        let i: number = 0;
        i < clienteInstanciado.listarPacientes().length;
        i++
      ) {
        console.log(
          clienteInstanciado.listarPacientes()[i].getNombre() +
            " / " +
            clienteInstanciado.listarPacientes()[i].getEspecie()
        );
      }
    }
    console.log(" ");
    console.log("------------------------- ");
    console.log(" ");
    console.log("1 - Registrar visita");
    console.log("2 - Modificar datos");
    console.log("3 - Modificar paciente");
    console.log("4 - Borrar paciente");
    console.log("5 - Nuevo paciente");
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
        clienteInstanciado = menuModificarCliente(clienteInstanciado);
        break;
      case 3:
        menuModificarPaciente(clienteInstanciado);
        break;
      case 4:
        menuBorrarPaciente();
        break;
      case 5:
        menuNuevoPaciente();
        break;
      case 9:
        console.clear();
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

function menuModificarCliente(clienteInstanciado: Cliente): Cliente {
  console.log(
    " Nombre: " +
      clienteInstanciado.getNombre() +
      " Telefono: " +
      clienteInstanciado.getTelefono()
  );

  let nuevoNombre: string = ReadlineSync.question(
    "Ingrese el nuevo nombre del cliente, si no cambia, ingrese el mismo: "
  );
  nuevoNombre = nuevoNombre.toUpperCase();
  let nuevoTelefono: number = Number(
    ReadlineSync.questionInt(
      "Ingrese el nuevo telefono del cliente, si no cambia, ingrese el mismo: "
    )
  );
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.questionInt(
        "Esta seguro de realizar los cambios? 1-Si 2-No :"
      )
    );
  }
  if (estaSeguro == 1) {
    /*      let listaDePacientes: Array<Paciente> =
        clienteInstanciado.listarPacientes(); */
    let nuevoCliente: Cliente = new Cliente(
      clienteInstanciado.getIdCliente(),
      nuevoNombre,
      nuevoTelefono,
      clienteInstanciado.getEsVip(),
      clienteInstanciado.getCantidadVisitas(),
      clienteInstanciado.listarPacientes()
    );
    veterinariaInstanciada.setCliente(
      clienteInstanciado.getIdCliente(),
      nuevoCliente
    );
    console.clear();
    console.log("CAMBIOS GUARDADOS");
    return nuevoCliente;
  } else {
    console.log("CAMBIOS DESCARTADOS");
    return clienteInstanciado;
  }
}

/******************PACIENTES****************** */

function menuModificarPaciente(clienteInstanciado: Cliente) {
  let pacienteACambiar: string = ReadlineSync.question(
    "Ingrese el Nombre del paciente que desea cambiar(0 para cancelar operacion): "
  );
  if (pacienteACambiar === "0") {
    console.log("MODIFICACION CANCELADA");
    setTimeout(() => {
      console.log(" ");
    }, 2000);
  } else {
    pacienteACambiar = pacienteACambiar.toUpperCase();
    let nuevoPaciente: Paciente;
    let nuevoNombre: string = ReadlineSync.question(
      "Ingrese el nuevo nombre del paciente, si no cambia, ingrese el mismo: "
    );
    let noSeEligioEspecie: boolean = true;
    let opcionEspecie: number;
    let nuevaEspecie: string;
    while (noSeEligioEspecie) {
      opcionEspecie = ReadlineSync.questionInt(
        "Ingrese la especie del paciente: 1-Perro 2-Gato 3-Exotico: "
      );
      if (opcionEspecie === 1) {
        nuevaEspecie = "PERRO";
        noSeEligioEspecie = false;
      } else if (opcionEspecie === 2) {
        nuevaEspecie = "GATO";
        noSeEligioEspecie = false;
      } else {
        nuevaEspecie = "EXOTICO";
        noSeEligioEspecie = false;
      }
    }
    nuevoNombre = nuevoNombre.toUpperCase();
    nuevoPaciente = new Paciente(
      clienteInstanciado.getIdCliente(),
      nuevoNombre,
      nuevaEspecie
    );
    let estaSeguro: number = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
      estaSeguro = Number(
        ReadlineSync.question(
          "Esta seguro que desea confirmar los cambios? 1-Si 2-No: "
        )
      );
    }
    if (estaSeguro) {
      clienteInstanciado.setPaciente(
        pacienteACambiar,
        clienteInstanciado.getIdCliente(),
        nuevoPaciente
      );
      /* console.clear(); */
      /* console.log("SE HAN GUARDADO LOS CAMBIOS"); */
    } else {
      console.log("LOS CAMBIOS NO SE HAN REALIZADO");
    }
  }
}

function menuRegistrarVisita() {
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.question(
        "El cliente tiene " +
          clienteInstanciado.getCantidadVisitas() +
          " visitas, esta seguro que desea registrar una visita nueva? 1-Si 2-No: "
      )
    );
  }
  if (estaSeguro == 1) {
    clienteInstanciado.registrarVisita();
    console.clear();
    console.log(
      "VISITA REGISTRADA!! GRACIAS POR ELEGIRNOS!! VUELVA PRONTOOOSSSSS"
    );
  } else {
    console.clear();
    console.log("LA VISITA NO SE HA REGISTRADO");
  }
}

function menuBorrarPaciente() {
  let pacienteABorrar: string = ReadlineSync.question(
    "Ingrese el nombre del Paciente a borrar(Ingrese 0 para cancelar): "
  );
  pacienteABorrar = pacienteABorrar.toUpperCase();
  if (pacienteABorrar === "0") {
    console.clear();
    console.log("MODIFICACION CANCELADA");
  } else {
    let estaSeguro: number = 0;
    while (estaSeguro != 1 && estaSeguro != 2) {
      estaSeguro = Number(
        ReadlineSync.questionInt(
          "Confirma el borrado del paciente? 1-Si 2-No :"
        )
      );
    }
    if (estaSeguro == 1) {
      console.clear();
      clienteInstanciado.borrarPaciente(
        pacienteABorrar,
        clienteInstanciado.getIdCliente()
      );
    } else {
      console.clear();
      console.log("LOS CAMBIOS NO SE HAN REALIZADO");
    }
  }
}

function menuNuevoPaciente(): void {
  console.clear();
  console.log("-----------------------");
  console.log("Ingresar nuevo Paciente");
  console.log("-----------------------");
  console.log("");
  let IDPaciente: number = clienteInstanciado.getIdCliente();
  let nombrePaciente: string = ReadlineSync.question(
    " Ingrese Nombre del nuevo Paciente:  "
  );
  let noSeEligioEspecie: boolean = true;
  let opcionEspecie: number;
  let nuevaEspecie: string;
  while (noSeEligioEspecie) {
    opcionEspecie = ReadlineSync.questionInt(
      "Ingrese la especie del paciente: 1-Perro 2-Gato 3-Exotico: "
    );
    if (opcionEspecie === 1) {
      nuevaEspecie = "PERRO";
      noSeEligioEspecie = false;
    } else if (opcionEspecie === 2) {
      nuevaEspecie = "GATO";
      noSeEligioEspecie = false;
    } else {
      nuevaEspecie = "EXOTICO";
      noSeEligioEspecie = false;
    }
  }
  let nuevoPaciente: Paciente = new Paciente(
    IDPaciente,
    nombrePaciente.toUpperCase(),
    nuevaEspecie
  );
  let estaSeguro: number = 0;
  while (estaSeguro != 1 && estaSeguro != 2) {
    estaSeguro = Number(
      ReadlineSync.questionInt(
        "Confirma el ingreso del nuevo paciente? 1-Si 2-No :"
      )
    );
  }
  if (estaSeguro == 1) {
    clienteInstanciado.agregarPaciente(nuevoPaciente);
    console.clear();
    console.log("EL PACIENTE HA SIDO CREADO");
  } else {
    console.clear();
    console.log("LOS CAMBIOS NO SE HAN REALIZADO");
  }
}

//INICIO DEL PROGRAMA

/* CARGA DE BBDD */

menuBienvenida();

/* GUARDADO DE BBDD */
