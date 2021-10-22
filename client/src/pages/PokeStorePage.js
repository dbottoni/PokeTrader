import React, { useEffect, useState, useContext } from "react";
import { PokedexContext } from "../App";
// import axios from "axios";

import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";
import { sortByType } from "../utils/helpers";
import { sortByXP } from '../utils/helpers';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_TEAM } from "../utils/actions";

// are we getting our pokedex state through props like this? 
export default function PokeStorePage(pokemon) {
  const {pokedex} = useContext(PokedexContext)
  console.log(pokedex);
  const [state, dispatch] = useStoreContext();

  const { pokemonId, pokeName, images, actualizedStats, level, type, cost, shinyImg } = pokemon;
  
  const { team } = state
  
  const addToTeam = () => {
    const playerOnTeam = team.find((teamPlayer) => teamPlayer._id === pokemonId )
    if (playerOnTeam) {
      dispatch({
        type: ADD_TO_TEAM,
        pokemonQuantity: { ...pokemon, quantity: 1 }
      });
    }    
  }

const renderedPokedex = sortByType(pokedex, 'grass')
const renderedByXP = sortByXP(renderedPokedex, 100)


// const renderedPokedex = sortByType(pokedex, 'poison')
// console.log(renderedPokedex);

console.log('RENDER BY XP');
console.log(renderedByXP);

  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon
  // need to map a different variable than our state. Take pokedex and mutate it (default: no change, filter by type/XP); then map that variable 

  return (
    <div className="container">
      <h2 className="content has-text-centered">Add to Your Team</h2>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row" >
      {/* <p className="content has-text-centered">Search for pokemon in the space below.</p> */}

      {/* POTENTIAL SEARCH OR FILTER EXPERIENCE HERE */}
      
      {renderedByXP.length > 0 ? renderedByXP.map(pokemon => {
        return (
          <div className="card column is-one-fifth" style={{"backgroundColor": setCardColor(pokemon.types[0].type.name)}}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={pokemon.sprites.front_default} alt="data.sprites.back_default" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{capitalizeName(pokemon.name)}</p>
                  <p className="subtitle is-6">{pokemon.types.map(type => {
                    return (capitalizeName(type.type.name + " ") )
                  })}</p>
                </div>
              </div>
  
              <div className="content">
                <p>Base XP : {pokemon.base_experience}</p>
              </div>
              <span className="card-footer"><a href="#" className="card-footer-item" onClick={addToTeam}>
                Add to Team
              </a></span>
            </div>
          </div>
        )
      }): <div> No Pokemon Returned</div>}
      </div>
    </div>
  )
}



