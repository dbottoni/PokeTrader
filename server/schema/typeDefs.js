const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon{
        _id:ID
        name: String
        stats: [String]
        type:[String]
        pokemonId: String
        images: [String]
        level: String
        type:[String]
        images: [String]
        stats: [String]
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
        savePokemon(name:String!, type:[String]!, pokemonId:ID!, images:[String]! level:String, stats:[String]): Pokemon
        removePokemon(_id: ID!): Pokemon
    }
`;

module.exports = typeDefs;






// cut from Pokemon: username:String, abilities: [String],  items: [String]