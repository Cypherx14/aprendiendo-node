import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
    base:number;
    limit:number;
    showTable:boolean;
}


export class ServerApp {


    static run({base, limit, showTable}:RunOptions):void{
        console.log('Server running....');
        const table = new CreateTable().execute({base, limit});
        if(showTable){
            console.log('Showing table on console');
            console.log('======================');
            console.log(table);
            console.log('======================');
        }
        


    }
}
