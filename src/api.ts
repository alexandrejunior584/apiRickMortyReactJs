import axios from 'axios';

export const Api =  {
    getAllPerson: async () => {
        let response = await axios.get("https://rickandmortyapi.com/api/character");
        return response.data.results;
    }
}