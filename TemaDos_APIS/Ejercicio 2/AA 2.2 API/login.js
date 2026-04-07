//Jorge Roberto Novelo Poot - 8B
import axios from "axios";

const login = async () => {
    try {
        const response = await axios.post(
            "https://dummyjson.com/auth/login",
            {
                username: "emilys",
                password: "emilyspass"
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Login OK:", response.data);
        return response.data.accessToken;

    } catch (error) {
        console.error("Error login:", error.response?.data || error.message);
        return null;
    }
};

export default login;