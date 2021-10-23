import React, { useState, useContext } from "react";
import { PokedexContext } from "../App";
// import axios from "axios";

import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

// are we getting our pokedex state through props like this?
export default function PokeStorePage(props) {
  const { pokedex } = useContext(PokedexContext);

  const [renderedPokemon, setRenderedPokemon] = useState(pokedex);

  function refreshPage() {
    window.location.reload(false);
  }

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
  };

  // const renderedPokedex = sortByType(pokedex, )
  // const renderedByXP = sortByXP(renderedPokedex, 100)

  // const [addPokemon] = useMutation(ADD_POKEMON)

  //   const pokemon = "Pokemon";

  //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)

  //render our store page with all pokemon
  // need to map a different variable than our state. Take pokedex and mutate it (default: no change, filter by type/XP); then map that variable

  return (
    <div className="container m-6">
      <h2 className="content has-text-centered">Add to Your Team</h2>
      <p className="content has-text-centered">
        Use the filter, then the slider, to choose the type and experience you
        want in a pokemon.
      </p>
      <p className="content has-text-centered">
        Then, click the Add to Team button to build your team!
      </p>

      <div className="columns">
        <div className="column is-one-fifth">
          <Filters
            renderedPokemon={renderedPokemon}
            setRenderedPokemon={setRenderedPokemon}
          />
        </div>
        <div className="column">
          <div className="columns is-desktop is-flex-wrap-wrap is-justify-content-space-evenly">
            {renderedPokemon.length > 0 ? (
              renderedPokemon.map((pokemon) => {
                return (
                  <div
                    className="card column"
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
                        <p className="card-content">
                          Base XP : {pokemon.base_experience}
                        </p>
                      </div>
                      <span className="card-footer">
                        <a
                          href="#"
                          className="card-footer-item"
                          onClick={addToTeam}
                        >
                          Add to Team
                        </a>
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                {" "}
                <div className="container">
                  <div className="columns no-match-container is-centered">
                    <div className="column is-one-third">
                      <h1 className="no-match">Oops!</h1>
                      <p className="no-match">
                        We couldn't match a Pokemon with your filter choices. Click Trade in the Navigation Bar to try again!
                      </p>
                      {/* <Link to="/trade">
                        <a className="navbar-item">TRADE</a>
                      </Link>
                      <button onClick={() => window.location.reload(false)}>Click to reload!</button>


                      <a onClick={refreshPage} className="button is-primary">
                        Try Again
                      </a> */}
                    </div>
                    <div className="column is-one-third">
                      <img className="no-match" src="/images/digimon.png" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
