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
        cost: Int
        username:String
    }
    type User{
        _id: ID
        username: String
        email: String
        balance: Int
        pokemonCount: Int
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
        savePokemon(name:String!,stats: [String]!, type:[String]!,pokemonId:String!,images:[String]!,level:String!,cost:Int!): Pokemon
        removePokemon(_id: String!): Pokemon
    }
`;

module.exports = typeDefs;