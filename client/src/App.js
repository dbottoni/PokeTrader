import React, { useState, useEffect } from "react";
import pokeAPI from "./utils/pokeAPI";
// import { pokemonJSON } from './utils/pokeAPI';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import PokeStorePage from "./pages/PokeStorePage";

function App() {
  //set state at APP level to track all pokemon in our pokedexDB
  const [pokedex, setPokedex] = useState([]);
  console.log(pokedex);

  //useEffect to call our API file on App load and setPokedex to the returned array of pokemon
  useEffect(() => {
    //pokemon getAll fetch
    pokeAPI
      .get("/pokemon/", {})
      .then((response) => {
        console.log("RESPONSE");
        console.log(response);
        console.log(response.data.results);

        const pokemonURL = response.data.results.map((pokemon) => {
          return pokemon.url;
        });

        //sets pokemon to array of urls, how do we use this/ store it
        //lets probably use useStoreContext
        setPokedex(pokemonURL);
      })
      .catch((err) => console.log(err));

    //[] run once on app load
  }, []);

  return (
    <div>
      <Nav />
      <div className="container">
        <PokeStorePage pokedex={pokedex} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
