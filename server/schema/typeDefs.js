const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon{
        _id:ID
        name: String
        abilities: [String]
        pokemonId: String
        type:[String]
        image: String
        items: [String]
        username:String
    }
    type User{
        _id: ID
        username: String
        email: String
        pokemonList: [Pokemon]
    }
    type Auth{
        token: ID!
        user: User
    }
    type Query{
        me: User
        users: [User]
        pokemons:[Pokemon]
    }
    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePokemon(name:String!,abilities: [String]!, type:[String]!,pokemonId:String!,image:String!,items:[String]!): Pokemon
        removePokemon(_id: String!): Pokemon
    }
`;

module.exports = typeDefs;