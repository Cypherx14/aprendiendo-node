
const {emailTemplate} = require('./js-foundation/01-template.js');
require('./js-foundation/02-destructuring.js');
// import { emailTemplate } from './js-foundation/01-template.js';

const { getUserById} = require('./js-foundation/04-arrow.js');




getUserById(2, function(error,user){
    if(error){
        throw new Error(error);
    }
    console.log(user);
});

// Using arrow function
getUserById(2, (error,user => {
    if(error){
        throw new Error(error);
    }
    console.log(user);

}));