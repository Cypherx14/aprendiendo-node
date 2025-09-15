const {getAge, getUUID} = require('./plugins');

const {emailTemplate} = require('./js-foundation/01-template.js');
require('./js-foundation/02-destructuring.js');
// import { emailTemplate } from './js-foundation/01-template.js';

// const { getUserById} = require('./js-foundation/04-arrow.js');
// getUserById(2, (error,user) =>{
//     if(error){
//         throw new Error(error);
//     }
//     console.log(user);
// });


const {getPokemonByID} = require('./js-foundation/06-promises.js');

getPokemonByID(1, (pokemon) => {
    console.log(pokemon);
})












//patron factory
// const {buildMakePerson} = require('./js-foundation/05-factory.js');

// const makePerson = buildMakePerson({getUUID, getAge});

// const obj = {
//     name: 'John',
//     birthDate: '2000-04-19',
// }

// const jhon = makePerson(obj);
// console.log(jhon);




