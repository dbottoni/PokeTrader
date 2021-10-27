import axios from 'axios';

export default axios.create({
    baseURL: `https://pokeapi.co/api/v2`, 
    params: {
        offset: 0,
        limit: 387
    }
});


//limit: 384 is gens 1-3 
