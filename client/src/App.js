import React, { useState, useEffect } from "react";
import pokeAPI from './utils/pokeAPI';
import { generatePokemonStats, generatePokemonLevel } from "./utils/actualizedStats";
import PokeStorePage from "./pages/PokeStorePage";


function App() {

  //set state at APP level to track all pokemon in our pokedexDB 
  const [pokedex, setPokedex]  = useState([]);
  // console.log(pokedex);

  //useEffect to call our API file on App load and setPokedex to the returned array of pokemon 
  useEffect(() => {
    // pokemon getAll fetch
    pokeAPI.get('/pokemon/', {

    }).then(response => {
      // console.log(response.data.results);
      
      const pokemonURL = response.data.results.map(pokemon => {
        return pokemon.url
      })
      
      setPokedex(pokemonURL)
    })
    .catch(err => console.log(err))

    //[] run once on app load 
  }, [])

  return (
    //conditionally render pages 
    <PokeStorePage  pokedex= {pokedex} />
  );
}

export default App;
