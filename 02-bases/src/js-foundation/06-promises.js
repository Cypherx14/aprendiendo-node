
const getPokemonByID = (id, callback ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((pokemon) =>  pokemon.name);
}


module.exports = {
    getPokemonByID,
}