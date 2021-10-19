import axios from 'axios';

export default axios.create({
    baseURL: `https://pokeapi.co/api/v2`, 
    params: {
        offset: 0,
        limit: 25
    }
});


// export const pokemonJSON = (url) => {
//     fetch(url).then(response => {
//         console.log(response);
//         return response
//     })
// }


//limit: 384 is gens 1-3 