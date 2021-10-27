import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
import { setCardColor } from "../utils/helpers";
import { capitalizeName } from "../utils/helpers";

export default function TrainersPage() {
  const { loading, data } = useQuery(GET_USERS);
  const usersData = data?.users;

  const fullTeams = usersData !== undefined ? usersData.filter(users => users.pokemonList.length >= 6) : []
  
  
  console.log(fullTeams);


  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        fullTeams.map((user) => {
          return (
            <div
              className="section user-team"
              style={{
                backgroundColor: "whitesmoke",
                boxShadow: "0px 0px 2px 2px grey",
              }}
            >
              <div className="block">
                <h3>{`${user.username}'s Team`}</h3>
              </div>
              <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
                {user.pokemonList.map((pokemon) => {
                  return (
                    <div
                      className="card column"
                      style={{ backgroundColor: setCardColor(pokemon.type[0]) }}
                      key={pokemon._id}
                    >
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img
                            src={pokemon.images}
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
                            <p className="is-4">Level: {pokemon.level}</p>
                            <p className="subtitle is-6">
                              {pokemon.type.map(
                                (el) => capitalizeName(el) + " "
                              )}
                            </p>
                          </div>
                        </div>
                        {/* <div className="content">
                        <p>Lvl {pokemon.level}</p>
                        <p className="subtitle is-6">
                          Total Stats:{" "}
                          {pokemon.stats.reduce(
                            (acc, cur) => parseInt(acc) + parseInt(cur)
                          )}{" "}
                        </p>
                        <ul className='stats-list'>
                          <li>HP: {pokemon.stats[0]}</li>
                          <li>Attack: {pokemon.stats[1]}</li>
                          <li>Defense: {pokemon.stats[2]}</li>
                          <li>Special Attack: {pokemon.stats[3]}</li>
                          <li>Special Defense: {pokemon.stats[4]}</li>
                          <li>Speed: {pokemon.stats[5]}</li>
                        </ul>
                      </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
