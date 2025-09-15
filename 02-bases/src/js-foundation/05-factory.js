// const {getAge, getUUID} = require('../plugins');


const buildMakePerson = ({getUUID, getAge }) => {
    return ({name, birthDate}) =>{ 
    return {
        id: getUUID(),
        name: name.toUpperCase(),
        birthDate: birthDate,
        age: getAge(birthDate)
        }
    }
}

// const buildPerson = ({name, birthDate}) =>{ 
//     return {
//         id: getUUID(),
//         name: name.toUpperCase(),
//         birthDate: birthDate,
//         age: getAge(birthDate)
//     }
// }


module.exports = {
    buildMakePerson,
}