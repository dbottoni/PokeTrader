import React, { useEffect, useState } from "react";
import axios from "axios";
import { setCardColor } from "../utils/helpers";

// are we getting our pokedex state through props like this? 
export default function PokeStorePage({pokedex}) {
  console.log("POKEDEX IN STORE");
  console.log(pokedex);

  // const renderedPokemon = pokedex.map(pokemon => {
  //   return (
  //     <div>
  //       <p>pokemon.name</p>
  //     </div>
  //   )
  // })
  // console.log('RENDER');
  // console.log(renderedPokemon);


  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon

  return (
    <div className="container">
      <h2 className="content has-text-centered">Add to Your Team</h2>
      {/* <p className="content has-text-centered">Search for pokemon in the space below.</p> */}

      {/* POTENTIAL SEARCH OR FILTER EXPERIENCE HERE */}

      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        <div className="card column is-one-fifth">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="025.png" alt="data.sprites.back_default" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">data.name</p>
                <p className="subtitle is-6">data.id</p>
              </div>
            </div>

            <div className="content">
              <p>data.base_experience</p>
              <p>data.types[0].type.name</p>
            </div>
          </div>
          {/* <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={addToTeam}>
              Add to Team
            </a>
          </footer> */}
        </div>
      </div>
    </div>
  )
        //   BEN'S PREVIOUS CODE FOR REFERENCE
        //render our store page with all pokemon 
        //   return (
        //     <div>

        //       Pokemon Store   
        //       {/* {this.props.pokedex.map()} */}
        //     </div>
        // )

  const addToTeam = () => {
      console.log("Added to Cart");
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

  //render our store page with all pokemon
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

{/* <>
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
</> */}