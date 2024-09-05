import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('pruebas en 02-funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    });
    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Sebastian';

        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    })
 });