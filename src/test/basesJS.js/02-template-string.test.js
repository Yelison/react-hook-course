import { getSaludo } from '../../basesJS/02-template-string';

describe('Probando 02-template-string', () => {
    test('getSaludo debe regresar Hola Yelisson',() => {
        const nombre = 'Yelisson'
        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre);
    });

    test('getSaludo debe regresar Hola Ortiz cuando no se le pasa argumento',() => {
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola ' + 'Ortiz');
    });
});
