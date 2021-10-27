import { gql } from 'graphql-tag';


export const GET_ME = gql`
{
    me {
        username
        email
        pokemonList {
          _id
          name
          level
          images
          type 
          stats
        }
      }
}`;

export const GET_USERS = gql`
{
    users {
      username
      pokemonList {
        name
        level
        _id
        images
        type
        stats
      }
    }
}`



// level
// cost 