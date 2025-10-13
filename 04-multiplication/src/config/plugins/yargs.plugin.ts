import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


const argv = yargs(hideBin(process.argv)).parseSync();

export const yargOptions = {...argv};

