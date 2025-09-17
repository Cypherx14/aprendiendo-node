const getAgePlugin = require('get-age');

export const getAge = (birthDate:string) => {
    if(!birthDate) {
        return new Error('Birth date is required');
    }
    return getAgePlugin(birthDate);
}



