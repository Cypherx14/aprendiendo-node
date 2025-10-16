
import * as fs from 'fs';
import { yargOptions } from './config/plugins/yargs.plugin';

const {b:base,l:limit,s:showTable} = yargOptions;



let data: string = '';
const headerMessage = `TABLA DEL ${base}\n`;
for (let index = 1; index <= limit; index++) {
    data += `${base} x ${index} = ${base * index}\n`;
}
if (showTable) {
    console.log(headerMessage);
    console.log(data);
}
data = headerMessage + data;
const outputPath = 'outputs/';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, data);
console.log('File created');





