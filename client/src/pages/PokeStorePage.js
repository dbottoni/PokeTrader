import React, { useEffect, useState } from "react";
import axios from "axios";
import { setCardColor } from "../utils/helpers";

// are we getting our pokedex state through props like this? 
export default function PokeStorePage({ pokedex }) {
  console.log("POKEDEX IN STORE");
  console.log(pokedex);



  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon
  return (
    <>
      <div>Pokemon Store</div>

      {pokedex.map((pokemon) => {
        return (
          <div key={pokemon.id} style={{ border: "2px solid black", background: setCardColor(pokemon.types[0].type.name) }}>
            <div>
              <h3>{pokemon.name}</h3>
              <img alt="pokemon" src={pokemon.sprites.front_default} />
              <p> {pokemon.types.map((type) => type.type.name + " ")}</p>
            </div>

            <div>
              <h3>Base XP: {pokemon.base_experience} </h3>
              <div>
                {" "}
                Base Stats:
                <ul>
                  {pokemon.stats.map(stat => {
                    return (
                    <li key={stat.stat.name}> {stat.stat.name}: {stat.base_stat} </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
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
