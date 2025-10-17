import { yargOptions } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


// async function main(){
(async () => {
    await main();
    console.log('End app');
})();


async function main() {
    const { b:base, l:limit, s:showTable, n:fileName, d:destination} = yargOptions;
    ServerApp.run({ base, limit, showTable, fileName, destination });
}

