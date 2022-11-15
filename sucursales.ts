import { Paciente } from "../Paciente";


export default class Sucursal {
    public IDsucursal:number;
    public direccion:string;
    public telefono:number;
    public clientes:Array<Cliente>;

    public constructor(IDsucursal:number,direccion:string,telefono:number,clientes:Array<Cliente>){
        this.IDsucursal=IDsucursal;
        this.direccion=direccion;
        this.telefono=telefono;
        this.clientes=clientes;
    }

    public getDireccion():string{
        return this.direccion
    }

    public getTelefono():number{
        return this.telefono
    }
    public getCliente(n):Cliente{
        return this.clientes[n]
    }
    public getPaciente(posicion):Paciente{
        return this.clientes[posicion].getPacientes();
    }
    public setDireccion(nuevaDireccion:string):void{
        this.direccion= nuevaDireccion;
    }
    public setTelefono(nuevoTelefono:number):void{
        this.telefono=nuevoTelefono;
    }
    public setCliente(posicion:number,nuevoCliente:Cliente):void{
        this.clientes[posicion]=nuevoCliente;
    }
    public borrarCliente(){

    }
    public listarClientes():string{
        for(let i=0;i<this.clientes.length;i++){
            console.log(`cliente: ${clientes[i].getNombre()}
            id: ${clientes[i].getID()}`)
        }
    }


    public listarSucursales(){}

}