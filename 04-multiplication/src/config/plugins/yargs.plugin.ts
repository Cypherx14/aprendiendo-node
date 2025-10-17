import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


const argv = yargs(hideBin(process.argv))
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true, // strictly required
        describe: 'Base for the multiplication table'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Limit of the multiplication table'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the table in console'
    }).option('n',{
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'Name of the file'
    }).option('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Destination of the file'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw new Error('The base must be a number');
        }
    
        // throw new Error('Error in the yargs options');
        return true;
    })
    .parseSync();

export const yargOptions = {...argv};

