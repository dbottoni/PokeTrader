import React, { Component, useEffect, useState } from "react";
import { pokemonJSON } from "../utils/pokeAPI";
import axios from "axios";

export default function PokeStorePage(props) {
  //   console.log(props);
  const { pokedex } = props;
  //   console.log(pokedex);

  pokedex.map((url) => {
    axios.get(url).then((response) => {
      console.log(response);
      console.log(response.data.name);

      // setPokedex(response.data)
    });
  });
  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)



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
//     const itemInCart = cart.find((cartItem) => cartItem._id === _id)
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: _id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         product: { ...item, purchaseQuantity: 1 }
//       });
//       idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
//     }
  }

  //render our store page with all pokemon
  return (
    <div>
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
          <footer class="card-footer">
            <a href="#" class="card-footer-item" onClick={addToTeam}>
              Add to Team
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
