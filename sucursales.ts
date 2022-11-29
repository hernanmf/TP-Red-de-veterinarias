import  Paciente  from "./Paciente";
import Cliente from "./cliente"

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

    public getIDsucursal():number{
        return this.IDsucursal
    }

    public getDireccion():string{
        return this.direccion
    }

    public getTelefono():number{
        return this.telefono
    }
    public getCliente(id:number){
        
        for (let i=0;i<this.clientes.length;i++){
            if(id=== this.clientes[i].id_Cliente){
            return this.clientes[i];    
            }
         }
    }
    public getPaciente(id_Cliente:number, nombrePaciente:string){
        
        for (let i=0;i<this.clientes.length;i++){
            if(id_Cliente=== this.clientes[i].id_Cliente){
            return this.clientes[i].getPacientes(nombrePaciente);    
            }
         }
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
    public borrarCliente(posicion:number){
        this.clientes=this.clientes.splice(posicion,1)
    }
    public listarClientes():void{
        for(let i=0;i<this.clientes.length;i++){
            console.log(`cliente: ${this.clientes[i].getNombre()}
            id: ${this.clientes[i].getIdCliente()}`)
        }
    }

}