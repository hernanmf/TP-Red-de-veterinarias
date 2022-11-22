export default function generadorDeId(arregloDeId:Array<number>){
    let id:number = Math.floor(Math.random() * (1 - 1000) + 1);
        for (let i=0;i<arregloDeId.length;i++){
            if(arregloDeId[i]===id){
                id = Math.floor(Math.random() * (1 - 1000) + 1);
                i=0; 
            }
            
        }
        arregloDeId.push(id);
        return id;
}
