import React, { Component, useEffect, useState } from "react";
import axios from "axios";

export default function PokeStorePage(props) {
  const { pokedex } = props;

  const [pokemonJSON, setPokemonJSON] = useState([]);
  console.log("POKEMON JSON");
  console.log(pokemonJSON);

  useEffect(() => {
      fetchJSON(pokedex)

  }, [pokedex] );


  //fetch pokemon JSON and store as pokemonJSON state
  const fetchJSON = (pokedex) => {
    pokedex.map((url) => {
      axios.get(url).then((response) => {
          console.log(response);

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
          <>
            <p>{pokemon.name}</p>
            <div>{pokemon.base_experience}</div>
          </>
        );
      })}
    </>
  );
}

const pokemonModel = [
  {
    pokeName: "test",
    base_experience: 1,
  },
  {
    pokeName: "test 2",
    base_experience: 2,
  },
];
