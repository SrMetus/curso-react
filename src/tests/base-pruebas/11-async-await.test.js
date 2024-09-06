import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe retornar una url de la imagen', async() => {
        const url = await getImagen();

        expect( typeof url ).toBe('string');
    });

    test('getImagen debe retornar un error si no tenemos la url', async() => {
        const resp = await getImagen();

        expect( resp ).toBe('No se encontro la imagen');
    });
 });