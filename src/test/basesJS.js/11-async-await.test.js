const { getImagen } = require("../../basesJS/11-async-await")

describe('Pruebas en 11-async-await', () => {
    test('Deberia regresar un string que empieze con "https://"', async () => {
        const url = await getImagen();

        console.log(url);
        expect(url.includes('https://')).toBe(true);
    })
    
})
