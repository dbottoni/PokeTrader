import React, { useContext, useState } from "react";
import { PokedexContext } from "../App";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import {REMOVE_POKEMON} from '../utils/mutations';

 

import { capitalizeName } from "../utils/helpers";
import { diceRoll } from "../utils/helpers";
import { setCardColor } from "../utils/helpers";




const Team = () => {
  const {loading, data} = useQuery(GET_ME)
  const [removePokemon, {error}] = useMutation(REMOVE_POKEMON)
  const userData = data?.me || {};
  console.log(userData);

  const ownedPokemon = userData.pokemonList;
  console.log(ownedPokemon);


  const removeFromTeam = async (pokemonId) => {
    console.log(pokemonId);
    console.log("Removed from Team");
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
     await removePokemon({
       variables: {
         _id: pokemonId
       }
     });

      if (error) {
        throw new Error('something went wrong!');
      }

      // const updatedUser = await response.json();
      // setUserData(updatedUser);
      // upon success, remove book's id from localStorage
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="content has-text-centered">{userData.username ? `${userData.username}'s ` : "Your" } Team</h2>
      <p className="content has-text-centered">
        You can only have six Pokemon on your team.
      </p>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {loading === false ? (
          ownedPokemon.map((pokemon) => {
            return (
              <div
                className="card column is-one-third"
                style={{"backgroundColor": setCardColor(pokemon.type)}}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={pokemon.shinyImg ? pokemon.shinyImg : pokemon.images} alt="data.sprites.back_default" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">
                     {capitalizeName(pokemon.name)}
                      </p>
                      <p className="subtitle is-6">{pokemon.type}</p>
                    </div>
                  </div>

                  <div className="content">
                    <p>Lvl {pokemon.level}</p>
                    <p className="subtitle is-6">Stats</p>
                    <ul>
                     {/* <li>HP: {pokemon}</li> */}
                    </ul>
                  </div>
                <span className='card-footer'><p
                    href="#"
                    className="card-footer-item"
                    onClick={() => removeFromTeam(pokemon._id)}
                  >
                    Remove From Team
                  </p></span>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Pokemon</div>
        )}
      </div>
    </div>
  );
};

export default Team;


const dummyData = {
  username: "Benny",
  email: "ben@gmail.com",
  pokemon: [
    {
      pokemonId: 1,
      pokeName: "charizard",
      images: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      actualizedStats: [110, 95, 100, 190, 180, 140],
      level: 53,
      type: "fire",
      cost: 100,
      shinyImg: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png'
    },
    {
      pokemonId: 2,
      pokeName: "kakuna",
      images:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png ",
      actualizedStats: [40, 40, 50, 65, 45, 35],
      level: 21,
      type: "bug",
      cost: 20,
    },
    {
      pokemonId: 3,
      pokeName: "pidgeotto",
      images:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png ",
      actualizedStats: [75, 76, 49, 120, 119, 120],
      level: 40,
      type: "flying",
      cost: 40,
    },
    {
      pokemonId: 4,
      pokeName: "arbok",
      images:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      actualizedStats: [99, 95, 75, 85, 130, 65],
      level: 25,
      type: "poison",
      cost: 45,
    },
    {
      pokemonId: 4,
      pokeName: "arbok",
      images:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      actualizedStats: [99, 95, 75, 85, 130, 65],
      level: 25,
      type: "poison",
      cost: 45,
    },
    {
      pokemonId: 4,
      pokeName: "arbok",
      images:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      actualizedStats: [99, 95, 75, 85, 130, 65],
      level: 25,
      type: "poison",
      cost: 45,
    },
  ],
  currentTeam: [1, 3],
};
