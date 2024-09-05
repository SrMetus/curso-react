import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => { 

    test('getSaludo debe retornar "Hola Sebastian"', () => {
        const name = 'Sebastian';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${ name }` );
    })
});