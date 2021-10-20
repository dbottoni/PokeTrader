import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PokeStorePage({pokedex}) {
  
//   console.log('POKEDEX IN STORE');
  console.log(pokedex);



  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon
  return (
    <>
      <div>Pokemon Store</div>

      {pokedex.map((pokemon) => {
        return (
        <>
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            {pokemon.types.map(type => {
              return <p>{type.type.name}</p> 
            })}
            <div>{pokemon.base_experience}</div>
          </div>
        </>
        );
      })}

      
    </>
  );
}








////old code 


  //useEffect - fetchJSON will probably go in another file to save as global state
  //envoke fetchJSON on mount
//   useEffect(() => {
//     fetchJSON(pokedex);
//   }, []);

// fetch pokemon JSON and store as pokemonJSON state
//   const fetchJSON = ( (pokedex) => {
//     // eslint-disable-next-line array-callback-return
//     pokedex.map((url) => {
        
//       axios.get(url).then((response) => {
//         //prevState => ...prevState to add to state
//         setPokemonJSON((prevState) => {
//           return [...prevState, response.data];
//         });
//       });
//     });
//   });