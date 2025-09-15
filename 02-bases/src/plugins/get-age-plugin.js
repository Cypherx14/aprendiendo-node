

const getAgePlugin = require('get-age');


const getAge = (birthDate) => {
    if(!birthDate) {
        return new Error('Birth date is required');
    }
    return getAgePlugin(birthDate);
}

module.exports = {
    getAge,
};

