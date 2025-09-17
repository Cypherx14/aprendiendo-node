// const {getAge, getUUID} = require('./plugins');

import { getUserById } from "./js-foundation/03-callbacks";
import { getPokemonByID } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

// const {emailTemplate} = require('./js-foundation/01-template.js');
// require('./js-foundation/02-destructuring.js');
// // import { emailTemplate } from './js-foundation/01-template.js';

getUserById(2, (error,user) =>{
    if(error){
        throw new Error(error);
    }
    console.log(user);
});


// // const {getPokemonByID} = require('./js-foundation/06-promises.js');


const info = getPokemonByID(2).then((pokemon) => {
    console.log(pokemon);
    })
    .catch((error) => {
        console.log('Error: ', error);
    })
    .finally(() => {
        console.log('Finally');
    });

// //logger
// const {buildLogger} = require('./plugins');

const logger = buildLogger('app.ts');

logger.log('This is a log message');
logger.error('This is an error message');





// //patron factory
// // const {buildMakePerson} = require('./js-foundation/05-factory.js');

// // const makePerson = buildMakePerson({getUUID, getAge});

// // const obj = {
// //     name: 'John',
// //     birthDate: '2000-04-19',
// // }

// // const jhon = makePerson(obj);
// // console.log(jhon);




