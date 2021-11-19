import React, { useState, useContext, useEffect } from "react";
import { PokedexContext } from "../App";
import Auth from "../utils/auth";
import { v4 as uuid } from "uuid";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POKEMON, ADD_BALANCE } from "../utils/mutations";
import { diceRoll } from "../utils/helpers";
import { GET_ME } from "../utils/queries";

import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";
import {
  generatePokemonStats,
  generatePokemonLevel,
  generatePokemonPrice,
  generatePokemonCost,
} from "../utils/actualizedStats";
import Filters from "../components/Filters";
import ConfirmAdd from "../components/ConfirmAdd";

export default function PokeStorePage() {
  const { pokedex, isLoading } = useContext(PokedexContext);

  console.log(pokedex);

  pokedex.forEach((pokemon) => {
    pokemon["price"] = generatePokemonCost(pokemon.base_experience);
    // console.log(pokemon)
  });

  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [modalState, setModalState] = useState({
    modalOpen: false,
    pokemonId: "",
    teamLength: "",
    img: "",
    price: "",
    name: "",
  });
  const [renderedPokemon, setRenderedPokemon] = useState(pokedex);

  const [addPokemon, { error }] = useMutation(ADD_POKEMON, {
    refetchQueries: [{ query: GET_ME }],
  });
  const [addBalance, { e }] = useMutation(ADD_BALANCE, {
    refetchQueries: [{ query: GET_ME }],
  });

  const addToTeam = async (pokemonId) => {
    if (userData.pokemonList.length >= 6) {
      return window.alert("You can only own 6 pokemon at a time!");
    }

    const actualizedStats = async (stats, base_experience) => {
      const pokemonLevel = generatePokemonLevel(base_experience);
      const pokemonStats = generatePokemonStats(
        stats.map((stat) => stat.base_stat),
        pokemonLevel
      );
      return { pokemonLevel, pokemonStats };
    };

    const { name, base_experience, stats, sprites, types, price } =
      await pokedex.find((pokemon) => pokemon.id === pokemonId);

    let typeArr = [];
    for (const type of types) {
      typeArr.push(type.type.name);
    }
    const isShiny = diceRoll();
    const pokemonImage =
      isShiny === true ? sprites.front_shiny : sprites.front_default;

    const { pokemonLevel, pokemonStats } = await actualizedStats(
      stats,
      base_experience
    );
    // const price = await generatePokemonPrice(pokemonLevel);
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
          stats: pokemonStats.toString().split(","),
          cost: price,
        },
      });
      console.log(data);
      const { updateUser } = await addBalance({
        variables: {
          balance: -price,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setRenderedPokemon(pokedex);
  }, []);

  if (isLoading === true) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(pokedex);
  console.log(renderedPokemon);

  return (
    <div className="container">
      <ConfirmAdd
        modalState={modalState}
        setModalState={setModalState}
        addToTeam={addToTeam}
        pokemonList={userData.pokemonList}
      />
      <div className="m-6">
        <h2 className="content has-text-centered">Add to Your Team</h2>
        <p className="content has-text-centered">
          Use the filter, then the slider, to choose the type and experience you
          want in a pokemon.
        </p>
        <p className="content has-text-centered">
          Then, click the Add to Team button to build your team!
        </p>
      </div>

      <Filters setRenderedPokemon={setRenderedPokemon} />
      <div className="columns">
        {/* <div className="column is-one-fifth"> */}
        {/* </div> */}
        <div className="column">
          <div className="columns is-desktop is-flex-wrap-wrap is-justify-content-space-evenly">
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
                          onClick={() =>
                            setModalState({
                              modalOpen: true,
                              pokemonId: pokemon.id,
                              img: pokemon.sprites.front_default,
                              teamLength: userData.pokemonList.length,
                              name: pokemon.name,
                              price: pokemon.price,
                            })
                          }
                        >
                          Add to Team: ${pokemon.price}
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
                        We couldn't match a Pokemon with your filter choices.
                        Click Trade in the Navigation Bar to try again!
                      </p>
                    </div>
                    <div className="column is-one-third">
                      <img
                        alt="digimon"
                        className="no-match"
                        src="/images/digimon.png"
                      />
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
