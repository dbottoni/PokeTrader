import React, { useState } from 'react';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { GET_ME } from '../utils/queries';



export default function ProfilePage() {
    // const { loading, data } = useQuery(GET_ME);
    // const userData = data?.me || {};

    const [userData, setUserData] = useState(dummyData) 
    console.log(userData);





    return (
        <div>
            Profile Page
        </div>
    )
}






const dummyData = {
    username: 'Benny',
    email: 'ben@gmail.com',
    pokemon: [
        {
            pokemonId: 1,
            pokeName: "charizard", 
            images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            actualizedStats: [110, 95, 100, 190, 180, 140],
            level: 53,
            type: "fire",
            cost: 100, 
        },
        {
            pokemonId: 2,
            pokeName: "kakuna", 
            images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png ",
            actualizedStats: [40, 40, 50, 65, 45, 35],
            level: 21,
            type: "bug",
            cost: 20, 
        },
        {
            pokemonId: 3,
            pokeName: "pidgeotto", 
            images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png ",
            actualizedStats: [75, 76, 49, 120, 119, 120],
            level: 40,
            type: "flying",
            cost: 40, 
        },
        {
            pokemonId: 4,
            pokeName: "arbok", 
            images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
            actualizedStats: [99, 95, 75, 85, 130, 65],
            level: 25,
            type: "poison",
            cost: 45, 
        },
    ],
    currentTeam: [1, 3]
}




//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png kakuna
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png pidgeotto
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png arbok