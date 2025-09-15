

const {getUUID} = require('./get-id-plugin');

const {getAge} = require('./get-age-plugin');

const {httpClientPlugin} = require('./http-client.plugin');

module.exports = {
    getAge,
    getUUID,
    httpClientPlugin
}