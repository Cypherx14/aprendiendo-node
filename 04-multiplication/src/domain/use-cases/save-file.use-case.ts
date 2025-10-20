
import * as fs from 'fs';


export interface SaveFileUseCase {
    execute:(options: Options) => boolean;

}

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {


    //should have a dependency injection of a file system handler
    constructor(){
        //repository or file system handler
    }

    execute({fileContent, destination = 'outputs', fileName='table'}: Options): boolean {
        try {
            
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/tabla-${fileName}.txt`, fileContent);
            console.log('File created'); 
            return true;
        } catch (error) {
            console.log('Error creating file', error);
            return false;
        }
    }
}
