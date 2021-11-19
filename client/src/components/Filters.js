import React, { useContext, useState, useEffect } from "react";
import { PokedexContext } from "../App";
import { sortPokedex } from "../utils/helpers";

export default function Filters(props) {
  const { setRenderedPokemon } = props;
  const { pokedex } = useContext(PokedexContext);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedType, setSelectedType] = useState(null);

  function handleSlider(e) {
    setSliderValue(e.target.value);
  }

  function handleTypeFilter(e) {
    // if no filter chosen, type = null  
    const type = e.target.value === "Select Type" ? null : e.target.value
    setSelectedType(type);
  }

  useEffect(() => {
    //next add set timeout to delay state change on slider by like .2 seconds - add page persistence
    const filteredPokemon = sortPokedex(pokedex, selectedType, sliderValue);
    setRenderedPokemon(filteredPokemon);
  }, [sliderValue, selectedType, setRenderedPokemon, pokedex]);

  return (
    <div className="select-container is-flex-wrap-nowrap is-justify-content-center" style={{marginTop: '20px', marginBottom: '15px'}}>
      <fieldset className="login-signup-form">
        <legend className="filter-title content has-text-centered">Filter</legend>
        <h3 className="content has-text-centered">Sort by Type:</h3>

        <div className="dropdown select is-info mt-6 mb-6">
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
          <h3 className="content has-text-centered">Sort by XP:</h3>
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


