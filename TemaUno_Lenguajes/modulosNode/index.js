const fs = require('fs');

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');
});