// const {getAge, getUUID} = require('../plugins');

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthDate:string) => number | Error;
}

interface PersonOptions {
    name: string;
    birthDate: string;
}

export const buildMakePerson = ({getUUID, getAge }:BuildMakePersonOptions) => {
    return ({name, birthDate}: PersonOptions) =>{ 
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


