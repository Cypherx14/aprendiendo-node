const { v4: uuidv4 } = require('uuid');

export const getUUID = () => {
    return uuidv4();
}
