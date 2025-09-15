
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
    const resp = await fetch(url);
    const pokemon = await resp.json();
    return pokemon.name;
}



module.exports = {
    getPokemonByID,
}