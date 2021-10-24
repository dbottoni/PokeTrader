import React, { useContext, useState, useEffect } from "react";
import { PokedexContext } from "../App";
import { sortPokedex } from "../utils/helpers";

export default function Filters(props) {
  const { renderedPokemon, setRenderedPokemon } = props;
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
    <div className="container">
      <div className="select">
        <select onChange={handleTypeFilter} value={selectedType}>
          <option>Choose Type</option>
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

      <div>
        <input
          type="range"
          value={sliderValue}
          min={0}
          max={250}
          step={1}
          onChange={handleSlider}
        />
        Value: {sliderValue}
      </div>
    </div>
  );
}
