//Jorge Roberto Novelo Poot - 8B
import axios from "axios";
import login from "./login.js";

const obtenerUsuario = async () => {
    try {
        const token = await login();

        if (!token) {
            console.log("No se obtuvo token");
            return;
        }

        const response = await axios.get(
            "https://dummyjson.com/auth/me",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("Usuario:", response.data);

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

obtenerUsuario();