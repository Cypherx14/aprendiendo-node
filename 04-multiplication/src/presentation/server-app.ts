import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base:number;
    limit:number;
    showTable:boolean;
    fileName:string;
    destination:string;
}


export class ServerApp {


    static run({base, limit, showTable, fileName, destination}:RunOptions):void{
        console.log('Server running....');
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({fileContent:table, destination, fileName});
        if(showTable){
            console.log('Showing table on console');
            console.log('======================');
            console.log(table);
            console.log('======================');
        }
        (wasCreated)? console.log('File created'): console.log('File not created');
    }
}
