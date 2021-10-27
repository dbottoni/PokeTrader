import React, { useState, useContext, useEffect, useRef } from "react";
import { PokedexContext } from "../App";
import Auth from "../utils/auth";
import { v4 as uuid } from "uuid";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POKEMON,ADD_BALANCE } from "../utils/mutations";
import { diceRoll } from "../utils/helpers";
import { GET_ME} from '../utils/queries';

import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";
import {
  generatePokemonStats,
  generatePokemonLevel,
  generatePokemonPrice
} from "../utils/actualizedStats";
import Filters from "../components/Filters";
import ConfirmAdd from '../components/ConfirmAdd';



export default function PokeStorePage() {
  const { pokedex } = useContext(PokedexContext);
  // console.log(pokedex);
  // pokedex.forEach(pokemon => {pokemon.push({"price":generatePokemonPrice(pokemon.base_experience)})});

  const {loading, data} = useQuery(GET_ME)
  const userData = data?.me || {};

  const [modalState, setModalState] = useState(
    {
      modalOpen: false, 
      pokemonId: '', 
      teamLength: '',
      img: '',
    })
  const [renderedPokemon, setRenderedPokemon] = useState(pokedex);

  const [addPokemon, { error }] = useMutation(ADD_POKEMON, {
    refetchQueries: [{query: GET_ME}]
  });
  const [addBalance, {e}] = useMutation(ADD_BALANCE,{
    refetchQueries: [{query: GET_ME}]
  })

  const addToTeam = async (pokemonId) => {
       if(userData.pokemonList.length >= 6){
        return window.alert('You can only own 6 pokemon at a time!')
    }

    const actualizedStats = async (stats, base_experience) => {
      const pokemonLevel = await generatePokemonLevel(base_experience);
      const pokemonStats = await generatePokemonStats(stats.map((stat) => stat.base_stat), pokemonLevel);
      return { pokemonLevel, pokemonStats };
    };

    const { name, base_experience, stats, sprites, types } = pokedex.find((pokemon) => pokemon.id === pokemonId);

    let typeArr = []
    for (const type of types) {
      typeArr.push(type.type.name)
    }
    const isShiny = diceRoll();
    const pokemonImage = isShiny === true ? sprites.front_shiny : sprites.front_default;

    const { pokemonLevel, pokemonStats } = await actualizedStats(stats, base_experience);
    const price = await generatePokemonPrice(pokemonLevel);
    const pokeID = uuid();
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const { data } = await addPokemon({
        variables: {
          _id: pokeID,
          name: name,
          images: pokemonImage,
          type: typeArr,
          level: pokemonLevel.toString(),
          stats: pokemonStats.toString().split(','),
          cost: price
        },
      });
      console.log(data)
      const {updateUser}= await addBalance({
        variables: {
          balance: -price
        }
      })
      // console.log(updateUser)
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="container">


      {/* <p className="content has-text-centered">Search for pokemon in the space below.</p> */}
      <ConfirmAdd modalState={modalState} setModalState={setModalState} addToTeam={addToTeam} pokemonList={userData.pokemonList} />
      <Filters
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
                key={uuid()}
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
                    <a
                      className="card-footer-item"
                      onClick={() =>  setModalState({modalOpen: true, pokemonId: pokemon.id, img: pokemon.sprites.front_default, teamLength: userData.pokemonList.length })}
                    >
                      Add to Team
                    </a>
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
