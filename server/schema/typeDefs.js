const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon{
        _id:ID
        name: String
        pokemonId: String
        level: String
        type:[String]
        images: [String]
        stats: [String]
        cost: Int
    }
    type User{
        _id: ID
        username: String
        email: String
        pokemonList: [Pokemon]
        balance:Int
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
        savePokemon(name:String!, type:[String]!, pokemonId:ID!, images:[String]! level:String, stats:[String],cost:Int): Pokemon
        removePokemon(_id: ID!): Pokemon
        addBalance(balance:Int!):User
        removeUser(_id:ID!):User
    }
`;

module.exports = typeDefs;






// cut from Pokemon: username:String, abilities: [String],  items: [String]