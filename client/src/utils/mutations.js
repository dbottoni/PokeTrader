import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        pokemonList {
          name
          }
      }
    }
  }
`;


export const ADD_POKEMON = gql`
  mutation savePokemon($_id: ID!, $name: String!, $level: String, $type: [String]!, $stats: [String], $images: [String]!, $cost:Int) {
    savePokemon(pokemonId: $_id, name: $name, level: $level, type: $type, images: $images, stats: $stats, cost:$cost) {
      _id
      name
      images
      stats
      level
      type
      cost
    }
  }

  `



export const REMOVE_POKEMON = gql`
  mutation removePokemon($_id: ID!){
    removePokemon(_id: $_id){
      _id
    }
  }
`

export const ADD_BALANCE = gql`
mutation addBalance($balance: Int!){
  addBalance(balance: $balance) {
    username
    balance
  }
}
`