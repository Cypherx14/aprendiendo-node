import { yargOptions } from "./config/plugins/yargs.plugin";


// async function main(){
(async () => {
    await main();
    console.log('End app');
})();


async function main() {
    console.log('Main executed');
    console.log(yargOptions);
    
}

