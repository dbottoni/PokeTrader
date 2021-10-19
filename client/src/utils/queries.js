import { gql } from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        username
        email
        pokemon {
          pokemonId
          pokeName
          images
          stats
          level
          type
          cost  
        }
      }
}`;