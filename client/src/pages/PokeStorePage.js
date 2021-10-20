import React, { Component, useEffect, useState  } from 'react';
import { pokemonJSON } from '../utils/pokeAPI';
import axios from 'axios';


export default function PokeStorePage (props){
    console.log(props);
    const { pokedex } = props
    console.log(pokedex);

   pokedex.map( url => {
       axios.get(url).then(response => {
           console.log(response.data);

           //setPokedex(response.data)
       })
   })
    //functions to handle: openPokemonModal, filter/search, buyPokemon, buyCoins (open a modal on store page? or buy coins in profile?)


        //render our store page with all pokemon 
        return (
            <div>

              <h1>Pokemon Store</h1>
              {/* {this.props.pokedex.map()} */}
            </div>
        )
    
}
