const getAgePlugin = require('get-age');

export const getAge = (birthDate:string) => {
    if(!birthDate) {
        return new Error('Birth date is required');
    }
    // return getAgePlugin(birthDate);


    console.log({currentYear: new Date().getFullYear()});
    
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}



