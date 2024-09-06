import axios from "axios";

const API_URL = `http://chitter-web-service.onrender.com/api/auth`;

const register = async (name, username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            name,
            email,
            username,
            password
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

        if (data.accessToken) {
            localStorage.setItem(`user`, JSON.stringify(response.data));
        }

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


