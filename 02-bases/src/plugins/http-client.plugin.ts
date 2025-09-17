import axios from 'axios'

//changing fetch to axios
export const httpClientPlugin = {
    get: async (url:string) => {
        const resp = await axios.get(url);
        return await resp.data;
    },
    post: async (url:string, body:any) => {},
    put: async (url:string, body:any) => {},
    delete: async (url:string) => {},
    
};



// const httpClientPlugin = {
//     get: async (url) => {
//         const resp = await fetch(url);
//         return await resp.json();
//     },
//     post: async (url, body) => {},
//     put: async (url, body) => {},
//     delete: async (url) => {},
// };
