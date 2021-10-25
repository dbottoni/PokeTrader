import { gql } from 'graphql-tag';


export const GET_ME = gql`
{
    me {
        username
        email
        pokemonList {
          id
          name
          level
          images
          type 
          stats
        }
      }
}`;




// level
// cost 