// Jorge Roberto Novelo Poot - 8B
// AA 1.4 Framework JS
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1> Hola mundo </h1>");
    res.sendStatus(200);
});

app.post('/registro', (req, res) => {
    res.send("<h1> Registro exitoso </h1>");
    res.sendStatus(201);
});

app.put('/usuario/actualizar', (req, res) => {
    res.send("<h1> Actualización exitosa </h1>");
    res.sendStatus(200);
});

app.patch('/usuario/modificar', (req, res) => {
    res.send("<h1> Modificación exitosa </h1>");
    res.sendStatus(200);
});

app.delete('/usuario/eliminar', (req, res) => {
    res.send("<h1> Eliminación exitosa </h1>");E
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Server is running on port 3000')
})