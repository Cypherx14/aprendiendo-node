import { heroes, Hero } from "../data/heroes";


export const findHeroById = (id:number): Hero | undefined => {
    return heroes.find( heroe => heroe.id === id );
}
