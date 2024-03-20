import axios from "axios";

const API_URL = `http://localhost:4005/api/auth/`;

const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            password,
            email
        });
        const data = await response.data;

        return data;
    }
    catch (error) {
        return { error: error.response.data.message };
    }
};

const login = async (identifier, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            identifier,
            password,
        });
        const data = await response.data;

        //if (data.accessToken) {
        //    localStorage.setItem(`user`, JSON.stringify(response.data));
        //}

        return data;
    }
    catch (error) {
        return { error: error.response.data.message };
    }
};

const logout = () => {
    localStorage.removeItem(`user`);
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(`user`));
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default authService;


