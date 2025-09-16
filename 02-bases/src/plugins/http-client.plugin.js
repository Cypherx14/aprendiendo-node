const axios = require('axios');

const buildHttpClient = () => {
    
};


//changing fetch to axios
const httpClientPlugin = {
    get: async (url) => {
        const resp = await axios.get(url);
        return await resp.data;
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {},
    
};


module.exports = {
    httpClientPlugin,
}


// const httpClientPlugin = {
//     get: async (url) => {
//         const resp = await fetch(url);
//         return await resp.json();
//     },
//     post: async (url, body) => {},
//     put: async (url, body) => {},
//     delete: async (url) => {},
// };
