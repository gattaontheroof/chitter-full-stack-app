import axios from "axios";
import peepService from "../../src/services/peep.service";
import authHeader from "../../src/services/auth.header";

vi.mock('axios');
vi.mock('../../src/services/auth.header');

describe('createPeep', () => {
    const API_URL = 'http://localhost:4005/api/peep';
    const content = 'Test peep';
    const headers = { 'Authorization': 'jwt' };

    beforeEach(() => {
        authHeader.mockReturnValue(headers);
    });

    it('should successfully post a peep', async () => {
        const response = { data: { message: 'Peep created successfully' } };
        axios.post.mockResolvedValue(response);

        const result = await peepService.createPeep(content);

        expect(axios.post).toHaveBeenCalledWith(`${API_URL}/`, { content }, { headers });
        expect(result).toEqual(response.data);
    });

    it('should return an error if the request fails', async () => {
        const error = { response: { data: { message: 'Error message' } } };
        axios.post.mockRejectedValue(error);

        const result = await peepService.createPeep(content);

        expect(axios.post).toHaveBeenCalledWith(`${API_URL}/`, { content }, { headers });
        expect(result).toEqual({ error: error.response.data.message });
    });
});