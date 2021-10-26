
const { Schema, model } = require('mongoose');

const pokemonschema = new Schema({
  name:
    {
      type: String,
      required:true,
    },
  type: [{
    type: String,
    required: true,
  },],
  //pokemon unique ID to find the image
  pokemonId: {
    type: String,
    required:true
  },
  //image link: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<pokemonId>.png
  images: [{
    type: String,
  }],
  stats:[{
    type: String,
    required: true,
  }],
  level: {
    type: String
  },
  cost: {
    type: String
  }
},
{
  toJSON: {
    getters: true
  }
});
const Pokemon = model('Pokemon', pokemonschema)

module.exports = Pokemon;
