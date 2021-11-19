import React, { useContext, useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { REMOVE_POKEMON } from "../utils/mutations";

import { capitalizeName } from "../utils/helpers";
import { setCardColor } from "../utils/helpers";
import ConfirmDelete from "../components/ConfirmDelete";

const Team = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const [removePokemon, { error }] = useMutation(REMOVE_POKEMON, {
    refetchQueries: [{ query: GET_ME }],
  });

  // const ownedPokemon = userData.pokemonList;
  const [modalState, setModalState] = useState({
    modalOpen: false,
    pokemonId: "",
  });
  const [ownedPokemon, setOwnedPokemon] = useState([]);
  // console.log(userData);
  // console.log(ownedPokemon);

  useEffect(() => {
    setOwnedPokemon(userData.pokemonList);
  }, [userData.pokemonList]);

  const removeFromTeam = async (pokemonId) => {
    console.log("Removed from Team");
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removePokemon({
        variables: {
          _id: pokemonId,
        },
      });

      if (error) {
        throw new Error("something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }
    setOwnedPokemon(userData.pokemonList);
  };

  return (
    <div className="container">
      <h2 className="content has-text-centered">
        {userData.username ? `${userData.username}'s ` : "Your"} Team
      </h2>
      <ConfirmDelete
        modalState={modalState}
        setModalState={setModalState}
        removeFromTeam={removeFromTeam}
      />
      <p className="content has-text-centered">
        You can only have six Pokemon on your team.
      </p>
      <p className="content has-text-centered">
        Your current balance: ${userData.balance}.
      </p>
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {ownedPokemon !== undefined ? (
          ownedPokemon.map((pokemon) => {
            return (
              <div
                className="card column is-one-fifth"
                style={{ backgroundColor: setCardColor(pokemon.type[0]) }}
                key={pokemon._id}
              >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={pokemon.images} alt="data.sprites.back_default" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">
                        {capitalizeName(pokemon.name)}
                      </p>
                      <p className="subtitle is-6">
                        {pokemon.type.map((el) => capitalizeName(el) + " ")}
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <p>Lvl {pokemon.level}</p>
                    <p className="subtitle is-6">
                      Total Stats:{" "}
                      {pokemon.stats.reduce(
                        (acc, cur) => parseInt(acc) + parseInt(cur)
                      )}{" "}
                    </p>
                    <ul>
                      <li>HP: {pokemon.stats[0]}</li>
                      <li>Attack: {pokemon.stats[1]}</li>
                      <li>Defense: {pokemon.stats[2]}</li>
                      <li>Special Attack: {pokemon.stats[3]}</li>
                      <li>Special Defense: {pokemon.stats[4]}</li>
                      <li>Speed: {pokemon.stats[5]}</li>
                    </ul>
                  </div>
                <span className='card-footer'><button
                    href="#"
                    className="card-footer-item"
                    onClick={() => setModalState({modelOpen:true,pokemonId:pokemon._id})}
                  >
                    Remove From Team
                  </button></span>
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
