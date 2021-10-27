import { gql } from 'graphql-tag';


export const GET_ME = gql`
{
    me {
        username
        email
        balance
        pokemonList {
          _id
          name
          level
          images
          type 
          stats
          cost
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

export const GET_POKEMON = gql`
query pokemons($username:String){
  pokemons(username:$username){
    _id
    name
    image
    type
    level
    stats
    cost
  }
}
`

// level
// cost 
