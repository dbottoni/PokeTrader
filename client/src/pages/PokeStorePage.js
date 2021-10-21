import React, { useEffect, useState, useContext } from "react";
<<<<<<< HEAD
//import { PokedexContext } from "../App";
=======
import { PokedexContext } from "../App";
>>>>>>> 768857b5857d7900f12a39b62d185d0eef6e438d
// import axios from "axios";

import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";
import { sortByType } from "../utils/helpers";
<<<<<<< HEAD
//import { sortByXP } from '../utils/helpers';

import { useMutation } from '@apollo/react-hooks';
import { ADD_POKEMON } from "../utils/mutations";


// are we getting our pokedex state through props like this? 
export default function PokeStorePage(props) {
  //const {pokedex} = useContext(PokedexContext)
  console.log("POKEDEX IN STORE");
  console.log(pokedex);

=======
import { sortByXP } from '../utils/helpers';

// are we getting our pokedex state through props like this? 
export default function PokeStorePage(props) {
  const {pokedex} = useContext(PokedexContext)
  console.log("POKEDEX IN STORE");
  console.log(pokedex);


  const addToTeam = () => {
   return console.log("Added to Cart");
  // const itemInCart = cart.find((cartItem) => cartItem._id === _id)
  // if (itemInCart) {
  //   dispatch({
  //     type: UPDATE_CART_QUANTITY,
  //     _id: _id,
  //     purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //   });
  //   idbPromise('cart', 'put', {
  //     ...itemInCart,
  //     purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
  //   });
  // } else {
  //   dispatch({
  //     type: ADD_TO_CART,
  //     product: { ...item, purchaseQuantity: 1 }
  //   });
  //   idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
  // }
}


const renderedPokedex = sortByType(pokedex, 'grass')
const renderedByXP = sortByXP(renderedPokedex, 100)
>>>>>>> 768857b5857d7900f12a39b62d185d0eef6e438d

  const [addPokemon] = useMutation(ADD_POKEMON)

//   const pokemon = "Pokemon";
  
  const addToTeam = async (pokemon) => {
    try {
      await addPokemon({
        variables: { id: pokemon._id }
      });
    } catch (e) {
      console.error("Error click handler");
    }
  };


// const renderedPokedex = sortByType(pokedex, 'poison')
// console.log(renderedPokedex);
const renderedByXP = sortByXP(pokedex, 100)
console.log('REDNER BY XP');
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
          <div className="card column is-one-fifth" style={{"background-color": setCardColor(pokemon.types[0].type.name)}}>
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
<<<<<<< HEAD
              <span className="card-footer"><a href="#" className="card-footer-item" onClick={() => addToTeam(pokemon)}>
=======
              <span className="card-footer"><a href="#" className="card-footer-item" onClick={addToTeam}>
>>>>>>> 768857b5857d7900f12a39b62d185d0eef6e438d
                Add to Team
              </a></span>
            </div>
          </div>
        )
      }): <div> No Pokemon Returned</div>}
      </div>
    </div>
  )
<<<<<<< HEAD


  //render our store page with all pokemon
}



 
=======
}



>>>>>>> 768857b5857d7900f12a39b62d185d0eef6e438d
