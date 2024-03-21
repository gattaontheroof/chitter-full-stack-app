import axios from "axios";

const API_URL = `http://localhost:4005/api/peep`;

const createPeep = async (content) => {
    try {
        const response = await axios.post(`${API_URL}/`, {
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
    createPeep
};

export default peepService;
