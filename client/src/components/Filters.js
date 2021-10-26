import React, { useContext, useState, useEffect } from "react";
import { PokedexContext } from "../App";
import { sortPokedex } from "../utils/helpers";

export default function Filters(props) {
  const { setRenderedPokemon } = props;
  const { pokedex } = useContext(PokedexContext);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedType, setSelectedType] = useState('');

  function handleSlider(e) {
    setSliderValue(e.target.value);
  }

  function handleTypeFilter(e) {
    setSelectedType(e.target.value);
  }

  useEffect(() => {
    //next add set timeout to delay state change on slider by like .2 seconds - add page persistence 
    const filteredPokemon = sortPokedex(pokedex, selectedType, sliderValue);
    setRenderedPokemon(filteredPokemon);
  }, [sliderValue, selectedType, setRenderedPokemon, pokedex]);

  return (
    <div className="select-container is-flex-wrap-nowrap is-justify-content-center">
      <fieldset className="login-signup-form">
        <legend className="filter-title has-text-centered">
          Filter Pokemon
        </legend>

        <div className="dropdown select is-info mt-6 mb-6">
          <h3>Sort by Type: </h3>
          <select onChange={handleTypeFilter} value={selectedType}>
            <option>Select Type</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="normal">Normal</option>
            <option value="flying">Flying</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </div>

        <div className="mt-6 mb-6 has-text-centered">
          <h3>Sort by XP: </h3>
          <p>{sliderValue}</p>
          <input
            type="range"
            value={sliderValue}
            min={0}
            max={250}
            step={1}
            onChange={handleSlider}
          />
        </div>
      </fieldset>
    </div>
  );
}


