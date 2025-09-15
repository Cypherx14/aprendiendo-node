
const getPokemonByID = (id, callback ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
        .then((response) => {
            response.json().then((data) => {
                callback(data.name);
            });
        });
}


module.exports = {
    getPokemonByID,
}