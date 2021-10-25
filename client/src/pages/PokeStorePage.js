import React, { useState, useContext } from "react";
import { PokedexContext } from "../App";
import Auth from "../utils/auth";
import { v4 as uuid } from "uuid";
// import axios from "axios";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { ADD_POKEMON } from "../utils/mutations";

import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";
import {
  generatePokemonStats,
  generatePokemonLevel,
} from "../utils/actualizedStats";
import Filters from "../components/Filters";

// are we getting our pokedex state through props like this?
export default function PokeStorePage(props) {
  const { pokedex } = useContext(PokedexContext);
  console.log(pokedex);

  const [renderedPokemon, setRenderedPokemon] = useState(pokedex);
  const [addPokemon, { error }] = useMutation(ADD_POKEMON);

  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);



  const addToTeam = async (pokemonId) => {

    const actualizedStats = async (stats, base_experience) => {
      ///take in base poke data and run through actualization funcs before sending try{addPokemon}
      const pokemonLevel = await generatePokemonLevel(base_experience);
      const pokemonStats = await generatePokemonStats(stats.map((stat) => stat.base_stat), pokemonLevel);
      return { pokemonLevel, pokemonStats };
    };

    // if (userData.pokemonList.length >= 5) window.alert('You can only own 6 pokemon at a time!')
    // const pokemonToAdd = pokedex.find(pokemon => pokemon.id === pokemonId)

    const { id, name, base_experience, stats, sprites, types } = pokedex.find((pokemon) => pokemon.id === pokemonId);

    let typeArr = []
    for (const type of types) {
      typeArr.push(type.type.name)
    }

    const { pokemonLevel, pokemonStats } = await actualizedStats(stats, base_experience);
    const pokeID = uuid();

    console.log("Adding to Team");
    console.log(pokemonLevel, pokemonStats);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    ///pokemon data captured. Now send addPokemon Request

    try {
      const { data } = await addPokemon({
        variables: {
          _id: pokeID,
          name: name,
          images: sprites.front_default,
          type: typeArr,
          level: pokemonLevel.toString(),
          stats: pokemonStats.toString()
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon
  // need to map a different variable than our state. Take pokedex and mutate it (default: no change, filter by type/XP); then map that variable

  return (
    <div className="container">
      {/* <p className="content has-text-centered">Search for pokemon in the space below.</p> */}

      {/* POTENTIAL SEARCH OR FILTER EXPERIENCE HERE */}
      <Filters
        renderedPokemon={renderedPokemon}
        setRenderedPokemon={setRenderedPokemon}
      />
      <h2 className="content has-text-centered">Add to Your Team</h2>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {renderedPokemon.length > 0 ? (
          renderedPokemon.map((pokemon) => {
            return (
              <div
                className="card column is-one-fifth"
                style={{
                  backgroundColor: setCardColor(pokemon.types[0].type.name),
                }}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={pokemon.sprites.front_default}
                      alt="data.sprites.back_default"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">
                        {capitalizeName(pokemon.name)}
                      </p>
                      <p className="subtitle is-6">
                        {pokemon.types.map((type) => {
                          return capitalizeName(type.type.name + " ");
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <p>Base XP : {pokemon.base_experience}</p>
                  </div>
                  <span className="card-footer">
                    <p
                      className="card-footer-item"
                      onClick={() => addToTeam(pokemon.id)}
                    >
                      Add to Team
                    </p>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div> No Pokemon Returned</div>
        )}
      </div>
    </div>
  );
}
