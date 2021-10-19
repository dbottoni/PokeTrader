import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokeStorePage(props) {
  const { pokedex } = props;

  const [pokemonJSON, setPokemonJSON] = useState([]);
//   console.log("POKEMON JSON");
  console.log(pokemonJSON);

  //useEffect - fetchJSON will probably go in another file to save as global state
  //envoke fetchJSON on mount 
  useEffect(() => {
      fetchJSON(pokedex)

  }, [pokedex] );


  //fetch pokemon JSON and store as pokemonJSON state
  const fetchJSON = (pokedex) => {
    // eslint-disable-next-line array-callback-return
    pokedex.map((url) => {
      axios.get(url).then((response) => {

        //prevState => ...prevState to add to state 
        setPokemonJSON(prevState => {
            return [...prevState, response.data ]
        });
      });
    });
  };

  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon
  return (
    <>
      <div>Pokemon Store</div>
      {pokemonJSON.map((pokemon) => {
        return (
          <div>
            <p>{pokemon.name}</p>
            <div>{pokemon.base_experience}</div>
          </div>
        );
      })}
    </>
  );
}

// const pokemonModel = [
//   {
//     pokeName: "test",
//     base_experience: 1,
//   },
//   {
//     pokeName: "test 2",
//     base_experience: 2,
//   },
// ];
