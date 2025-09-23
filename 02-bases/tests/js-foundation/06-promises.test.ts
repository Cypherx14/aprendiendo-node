

import { getPokemonByID } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
    test('getPokemonByID should return the name of the pokemon', async () => {
        const pokemonId = 1; // Bulbasaur
        const pokemonName = await getPokemonByID(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    });

    test('getPokemonByID should return an error if pokemon does not exists', async () => {
        const pokemonId = 1000000; //not valid id 

        try {
            await getPokemonByID(pokemonId);
            expect(true).toBe(false); // This line should not be reached
        }
        catch (err) {
            expect(err).toEqual(new Error(`Pokemon with id ${pokemonId} not found`));
            // expect(err).toBe(`Pokemon with id ${pokemonId} not found`);
        }


    });

}); 
