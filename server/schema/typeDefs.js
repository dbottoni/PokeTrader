const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon{
        name: String
        abilities: [String]
        pokemonId: String
        type:[String]
        image: String
        items: [String]
    }
    type User{
        _id: ID
        username: String
        email: String
        balance: Int
        pokemonCount: Int
        savedPokemon: [Pokemon]
    }
    type Auth{
        token: ID!
        user: User
    }
    type Query{
        me: User
        users: [User]
    }
    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePokemon(name:String,abilities: [String], type:[String],pokemonId:String,image:String,items:[String]): User
        removePokemon(pokemonId: String): User
    }
`;

module.exports = typeDefs;