const {httpClientPlugin} = require('../plugins');
// const getPokemonByID = (id, callback ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     return fetch(url)
//         .then((resp) => {
//             return resp.json();
//         })
//         .then((pokemon) =>  pokemon.name);
// }

//using async/await
const getPokemonByID = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);

    return pokemon.name;
}



module.exports = {
    getPokemonByID,
}