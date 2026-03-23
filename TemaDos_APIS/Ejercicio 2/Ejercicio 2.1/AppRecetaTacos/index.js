//Jorge Roberto Novelo Poot - 8B

import express from "express";
import bodyParser from "body-parser";

// servidor
const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// leer json
const recetaJSON = `
[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Cochinita Pibil",
    "precio": 22.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cochinita",
        "preparacion": "Pibil (enterrado con achiote y naranja agria)"
      },
      "salsa": {
        "nombre": "Xnipec",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada curtida",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Naranja agria", "Sal", "Orégano"]
        },
        {
          "nombre": "Chile habanero",
          "cantidad": "Al gusto",
          "ingredientes": ["Chile habanero picado", "Limón"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco de Relleno Negro",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pavo",
        "preparacion": "Guisado en recado negro de chiles quemados"
      },
      "salsa": {
        "nombre": "Kut de habanero",
        "picor": "Muy alto"
      },
      "acompañamientos": [
        {
          "nombre": "But",
          "cantidad": "1 pieza",
          "ingredientes": ["Carne molida de cerdo", "Recado negro", "Especias"]
        },
        {
          "nombre": "Huevo cocido",
          "cantidad": "2 rebanadas",
          "ingredientes": ["Huevo de gallina", "Sal"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de Poc Chuc",
    "precio": 24.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cerdo",
        "preparacion": "Asado al carbón marinado en naranja agria"
      },
      "salsa": {
        "nombre": "Chiltomate",
        "picor": "Bajo"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla asada",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca", "Aceite", "Sal"]
        },
        {
          "nombre": "Frijol colado",
          "cantidad": "1 cucharada",
          "ingredientes": ["Frijol negro", "Epazote", "Manteca"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de Castacán",
    "precio": 26.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Panza de cerdo",
        "preparacion": "Frito hasta quedar crujiente"
      },
      "salsa": {
        "nombre": "Salsa de tomatillo",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Queso de bola",
          "cantidad": "20 gramos",
          "ingredientes": ["Queso Edam rallado"]
        },
        {
          "nombre": "Pico de gallo",
          "cantidad": "1 cucharada",
          "ingredientes": ["Tomate", "Cebolla", "Cilantro", "Limón"]
        }
      ]
    }
  }
]
`;

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