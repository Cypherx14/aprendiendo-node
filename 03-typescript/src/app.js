
const heroes = [
    { id: 1, name: 'Batman', owner: 'DC'    },
    { id: 2, name: 'Spiderman', owner: 'Marvel' },
    { id: 3, name: 'Superman', owner: 'DC'   },
    { id: 4, name: 'Flash', owner: 'DC'      },
    { id: 5, name: 'Wolverine', owner: 'Marvel' }
]

const findHeroById = (id) => {
    return heroes.find( heroe => heroe.id === id );
}

const hero = findHeroById(2);
console.log(hero?.name ?? 'Hero not found');