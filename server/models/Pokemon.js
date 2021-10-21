const { Schema } = require('mongoose');

const pokemonschema = new Schema({
  name:
    {
      type: String,
      required:true,
    },
  abilities: [{
    type: String,
    required: true,
  },],
  type: [{
    type: String,
    required: true,
  },],
  //pokemon unique ID to find the image
  pokemonId: {
    type: String,
    required:true
  },
  //image linke: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<pokemonId>.png
  image: {
    type: String,
  },
  items:[
    {
    type:String
    }
  ]
});

module.exports = pokemonschema;
