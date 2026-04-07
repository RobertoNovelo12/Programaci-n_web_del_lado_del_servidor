//Jorge Roberto Novelo Poot - 8B
import axios from "axios";

const obtenerUsuario = async () => {
    try {
        const response = await axios.get(
            'https://reqres.in/api/users/4',
            {
                headers: {
                    'x-api-key': 'pro_27c4aeb079ef591a5470360fa137b993da234c015d17dcbd9003ad8ad372a1fa',
                    'X-Reqres-Env': 'prod'
                }
            }
        );

        console.log('Datos del usuario:', response.data);

    } catch (error) {
        console.error(
            'Error al obtener datos del usuario:',
            error.response?.data || error.message
        );
    }
};

obtenerUsuario();