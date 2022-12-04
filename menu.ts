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
for (let i: number = 0; i < datosClientes.getArregloString().length; i++) {
  crearCliente(
    datosClientes.getArregloString()[i],
    arregloClientes,
    arregloPacientes
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
  crearSucursal(datosSucursales.getArregloString()[i], arregloSucursales);
}
var veterinariaInstanciada = new Veterinaria(
  "Camerun Soft",
  arregloSucursales,
  arregloProveedor
);

var sucursalInstanciada: Sucursal;
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
    console.log(" ");
    console.log("------------------------- ");
    console.log("0 - Salir");
    console.log("------------------------- ");
    opcionMenuBienvenida = Number(
      ReadlineSync.question("Ingrese una opcion: ")
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
      ReadlineSync.question("Ingrese una opcion: ")
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

function menuBorrarProveedor(): void {}
function menuNuevoProveedor(): void {}

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
    opcionMenuSucursal = Number(ReadlineSync.question("Ingrese una opcion: "));

    switch (opcionMenuSucursal) {
      case 1:
        menuEntrarASucursal();
        break;
      case 2:
        menuModificarSucursal();
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

function menuEntrarASucursal() {
  let IDSucursalAInstanciar: number = Number(
    ReadlineSync.question(
      "Ingrese el id de la sucursal a la que desea ingresar(0 para cancelar operacion): "
    )
  );
  if (IDSucursalAInstanciar != 0) {
    let i: number = 0;
    let listaDeSucursales: Array<Sucursal> =
      veterinariaInstanciada.listarSucursal();
    while (
      i < listaDeSucursales.length &&
      listaDeSucursales[i].getIDsucursal() != IDSucursalAInstanciar
    ) {
      i++;
    }
    if (i < listaDeSucursales.length) {
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

function menuModificarSucursal() {
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

function menuBorrarSucursal(): void {}
function menuNuevaSucursal(): void {}
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
        menuEntrarACliente();
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

function menuBorrarCliente(): void {}
function menuNuevoCliente(): void {}

function menuEntrarACliente() {
  let IDClienteAInstanciar: number = Number(
    ReadlineSync.question(
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
      clienteInstanciado = sucursalInstanciada.getCliente(IDClienteAInstanciar);
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
    opcionMenuEnCliente = Number(ReadlineSync.question("Ingrese una opcion: "));

    switch (opcionMenuEnCliente) {
      case 1:
        menuRegistrarVisita();
        break;
      case 2:
        menuModificarCliente();
        break;
      case 3:
        /* LISTAR PACIENTES */
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
      clienteInstanciado.getPacientes(IDaCambiar).getEspecie()
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

function menuBorrarPaciente(): void {}
function menuNuevoPaciente(): void {}

//INICIO DEL PROGRAMA

/* CARGA DE BBDD */

menuBienvenida();

/* GUARDADO DE BBDD */
