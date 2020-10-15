const persona = {
    nombre: 'Iron',
    apellido: 'Man',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55423311,
        lat: 14.56322,
        lng: 34.89564223
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Yelisson';

console.log( persona );
console.log( persona2 );
