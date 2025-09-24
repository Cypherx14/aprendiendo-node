
import * as fs from 'fs';

let data:string='';
const base=5;
const headerMessage = `TABLA DEL ${base}\n`;
for (let index = 1; index < 11; index++) {
    data += `5 x ${index} = ${base * index}\n`;
}
console.log(headerMessage);
console.log(data);
data = headerMessage + data;

const outputPath = 'outputs/'; 


fs.mkdirSync(outputPath, {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, data);
console.log('File created');





