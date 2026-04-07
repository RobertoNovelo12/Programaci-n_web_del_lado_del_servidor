//Jorge Roberto Novelo Poot - 8B
import axios from "axios";

const API_KEY = "6927c55922d12055771e1d6879c3eea8";

const obtenerClima = async () => {
    try {
        const ciudad = "Cancun";

        const respuesta = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
        );

        console.log("Ciudad:", respuesta.data.name);
        console.log("Temperatura:", respuesta.data.main.temp, "°C");
        console.log("Clima:", respuesta.data.weather[0].description);

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

obtenerClima();