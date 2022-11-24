import * as fs from 'fs';
import * as readFileSync from 'readline-sync';
import * as readlineSync from 'readline-sync';

export default class LectorArchivos{
    private arregloString: string[];
    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
    public getArregloString(): string[] {
        return this.arregloString;
    }
}