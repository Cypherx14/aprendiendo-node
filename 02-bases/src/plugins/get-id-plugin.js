

// const uuidv4 = require('uuid').v4;

const {v4: uuidv4} = require('uuid');

const getUUID = () => {
    return uuidv4();
}

module.exports = {
    getUUID,
};