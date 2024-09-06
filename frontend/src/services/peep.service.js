import axios from "axios";
import authHeader from "./auth.header";

const API_URL = `https://chitter-web-service.onrender.com/api/peep`;

const createPeep = async (content) => {
    try {
        const response = await axios.post(`${API_URL}/`, 
            {content},
            {headers: authHeader()}
        );
        const data = await response.data;

        return data;
    }
    catch (error) {
        return { error: error.response.data.message };
    }
};

const getAllPeeps = async (content) => {
    try {
        const response = await axios.get(`${API_URL}/`, {
            content
        });
        const data = await response.data;

        return data;
    }
    catch (error) {
        return { error: error.response.data.message };
    }
};

const peepService = {
    createPeep,
    getAllPeeps
};

export default peepService;
