const {User, Pokemon} = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('pokemonList')        
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('pokemonList')
       },
        pokemons:async()=>{
          return Pokemon.find()
        }
    },
    Mutation:{
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {user,token};
        },

        login: async(parent, { email, password }) =>{
            const user = await User.findOne({ email });

            if (!user) {
              throw new AuthenticationError('Email dos not exist.');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Password Was Wrong');
            }
          
            const token = signToken(user);
            return { token, user };
        },



        savePokemon: async (parent, args, context) => {
          if (context.user) {
            
              const pokemon = await Pokemon.create({...args, username: context.user.username})
             
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { pokemonList: pokemon._id } },
                { new: true }
              );
              return pokemon;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          removePokemon: async (parent, args, context) => {
            console.log(args._id)
            if(context.user) {
              const removedPoke = await Pokemon.findByIdAndDelete(args._id)

                const updateUser =  await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { pokemonList: removedPoke._id} },
                { new: true }
            );

            return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
         
 
        removeUser: async(parent,args) =>{
          const removeUser  = await User.findByIdAndDelete(args._id);
          return removeUser;
        },

        addBalance: async (parent,args,context) =>{
          console.log(args.balance)
          if(context.user){
            const updateUser = await User.findOneAndUpdate(
              {_id: context.user._id},
              {$inc:{balance:parseInt(args.balance)}},
              {new:true}
            );
            return updateUser;
          }
          throw new AuthenticationError('You need to be logged in!');
        }
    }
};
module.exports = resolvers;
