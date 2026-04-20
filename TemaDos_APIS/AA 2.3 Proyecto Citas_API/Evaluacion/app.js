import express from "express"
import axios from "axios"

const app = express()
const port = 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get('/', async (req, res) => {
    try{
        const result = await axios.get('https://restcountries.com/v3.1/name/mexico')
        const bandera = result.data[0].flags.png
        const nombre = result.data[0].name.common

        res.render('index', {
            bandera: bandera, 
            nombre: nombre
        })
    }

    catch(error){
        if (error.response){
            console.log(error.response.data)
        } else {
            console.log('Error: ', error.message)
        }
        res.status(500).send("Error al obtener cita")
    }
})

app.listen(port, () => {
    console.log("Servidor levantado")
})