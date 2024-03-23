import axios from "axios";
import { createPeep,  getAllPeeps } from "../../src/services/peep.service";
const { authHeader } = require('../../src/services/auth-header');

jest.mock('axios');
jest.mock('../../src/services/auth-header');

describe('createPeep', () => {
    const API_URL = 'http://localhost:3000/api/peeps';
    const content = 'Test peep';
    const headers = { 'Authorization': 'Bearer token' };

    beforeEach(() => {
        authHeader.mockReturnValue(headers);
    });

    it('should successfully post a peep', async () => {
        const response = { data: { message: 'Peep created successfully' } };
        axios.post.mockResolvedValue(response);

        const result = await createPeep(content);

        expect(axios.post).toHaveBeenCalledWith(`${API_URL}/`, { content }, { headers });
        expect(result).toEqual(response.data);
    });

    it('should return an error if the request fails', async () => {
        const error = { response: { data: { message: 'Error message' } } };
        axios.post.mockRejectedValue(error);

        const result = await createPeep(content);

        expect(axios.post).toHaveBeenCalledWith(`${API_URL}/`, { content }, { headers });
        expect(result).toEqual({ error: error.response.data.message });
    });
});