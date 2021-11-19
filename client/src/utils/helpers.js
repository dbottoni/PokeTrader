export const setCardColor = (type) => {
  switch (type) {
    default:
      return `#a2a7add3`;

    case "fire":
      return `#fc3535d3`;

    case "water":
      return `#3592fcd3`;

    case "grass":
      return `#56eb5ed3`;

    case "normal":
      return `#ebebebef`;

    case "electric":
      return `#e8f853cb`;

    case "ice":
      return `#53e5f8cb`;

    case "fighting":
      return `#f74728e3`;

    case "poison":
      return `#a428f7e3`;

    case "ground":
      return `#6d382b`;

    case "flying":
      return `#6d3ddfe7`;

    case "psychic":
      return `#cc3ddfe7`;

    case "bug":
      return `#9cd337e7`;

    case "ghost":
      return `#3a1c70e7`;

    case "dragon":
      return `#e0911ae7`;

    case "dark":
      return `#040327e7`;

    case "steel":
      return `#76797af6`;

    case "fairy":
      return `#de96ecf6`;

    case "rock":
      return `#8d4810`;
  }
};

export const capitalizeName = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};


//STORE FILTER FUNCTION
export const sortPokedex = (pokedex, type, xp) => {
  if (type === null && xp === 0) return pokedex;

  let filteredPokedex = [];

  if (type !== null) {
    pokedex.map((pokemon) => {
      for (let i = 0; i < pokemon.types.length; i++) {
        if (pokemon.types[i].type.name === type) {
           filteredPokedex.push(pokemon);
        }
      }
    });

    return filteredPokedex.filter((pokemon) => pokemon.base_experience > xp);
  }
  return pokedex.filter((pokemon) => pokemon.base_experience > xp);
};



// 1 in X chance to return true; used for shiney probability
export function diceRoll() {
  const randNum = Math.floor(Math.random() * 100 + 1);
  if (randNum === 1) return true;
  else return false;
}

