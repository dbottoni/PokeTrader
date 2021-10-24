import { gql } from 'graphql-tag';


export const GET_ME = gql`
{
    me {
        username
        email
        pokemonList {
          _id
          pokemonId
          name
          images
          stats
          level
          type
          cost  
        }
      }
}`;

export const QUERY_POKEMONS =gql`{
      Pokemon {
        _id
        pokemonId
        name
        images
        stats
        level
        type
        cost
        username
      }
}`;