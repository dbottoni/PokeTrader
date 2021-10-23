import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        pokemonList {
          pokemonId
          name
          image
          type  
        }
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
          type
          pokemonId
          image 
          }
      }
    }
  }
`;


// export const BUY_POKEMON = gql`
//   mutation buyPokemon()
// `


export const ADD_POKEMON = gql`
  mutation savePokemon($id: ID!) {
    savePokemon(pokemonId: $id) {
      _id
      pokeName
      images
      stats
      level
    }
  }

  `



// export const REMOVE_POKEMON = gql`
//   mutation removePokemon()
// `