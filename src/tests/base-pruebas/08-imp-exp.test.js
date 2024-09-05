import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes';


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({"id": 1, "name": "Batman", "owner": "DC"});
    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const expectedHeroes = heroes.filter((heroe) => heroe.owner === owner);
        expect(heroe.length).toBe(3);
        expect(heroe).toEqual([
            {"id": 1, "name": "Batman", "owner": "DC"}, 
            {"id": 3, "name": "Superman", "owner": "DC"}, 
            {"id": 4, "name": "Flash", "owner": "DC"}
        ]);
        expect(heroe).toEqual(expectedHeroes);
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        //const expectedHeroes = heroes.filter((heroe) => heroe.owner === owner); // Dinámico
        
        expect(heroe.length).toBe(2);
        expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })

});