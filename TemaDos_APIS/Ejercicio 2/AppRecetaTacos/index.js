import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

// servidor
const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// leer json
const recetaJSON = fs.readFileSync("./recetaTacos.json", "utf-8");

// convertir el objeto a json
const recetasTacos = JSON.parse(recetaJSON);


// endpoint
app.get("/receta/:type", (req, res) => {
  const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLocaleLowerCase())

  res.json(elegirTaco || {error: "Receta no encontrada"});
});

// iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});