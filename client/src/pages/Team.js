import React, { useContext } from "react";
import { PokedexContext } from "../App";


import { capitalizeName } from "../utils/helpers";
import { diceRoll } from "../utils/helpers";
import { setCardColor } from "../utils/helpers";


const Team = () => {
  const myPokemon = dummyData.pokemon;

  const removeFromTeam = () => {
    console.log("Removed from Team");
  };

  return (
    <div className="container">
      <h2 className="content has-text-centered">Your Team</h2>
      <p className="content has-text-centered">
        You can only have six Pokemon on your team.
      </p>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {myPokemon.length ? (
          myPokemon.map((pokemon) => {
            return (
              <div
                className="card column is-one-third"
                style={{"background-color": setCardColor(pokemon.type)}}
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
                        {pokemon.pokemonId} : {capitalizeName(pokemon.pokeName)}
                      </p>
                      <p className="subtitle is-6">{pokemon.type}</p>
                    </div>
                  </div>

                  <div className="content">
                    <p>Lvl {pokemon.level}</p>
                    <p className="subtitle is-6">Stats</p>
                    <ul>
                      {pokemon.actualizedStats.map(stat => {
                      return <li>Stat Name: {stat} </li>
                      })}
                    </ul>
                  </div>
                <span className='card-footer'><p
                    href="#"
                    className="card-footer-item"
                    onClick={removeFromTeam}
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
  ],
  currentTeam: [1, 3],
};
