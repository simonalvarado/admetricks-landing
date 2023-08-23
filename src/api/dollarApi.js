import axios from 'axios';

const baseURL = 'https://mindicador.cl/api/';

export const getDollarData = async () => {
    try {
        const response = await axios.get(`${baseURL}dolar`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}