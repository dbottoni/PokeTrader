//generate random level by base experience
export const generatePokemonLevel = (baseXP) => {

  let level = 1;

  if (baseXP < 100) {
    level = 10 + (Math.floor(Math.random() * 14) + 1);
    return level;
  } else if (100 <= baseXP && baseXP <= 150) {
    level = 25 + (Math.floor(Math.random() * 14) + 1);
    return level;
  } else if (150 < baseXP && baseXP <= 200) {
    level = 40 + (Math.floor(Math.random() * 14) + 1);
    return level;
  } else if (200 < baseXP && baseXP <= 235) {
    level = 55 + (Math.floor(Math.random() * 14) + 1);
    return level;
  } else {
    level = 55 + (Math.floor(Math.random() * 35) + 1);
    return level;
  }
};

//takes stats as array of base stats and returns actualized stats
export const generatePokemonStats = (stats, level) => {
  let newStats = [];
  let statRandomizer = Math.random() + Math.random();

  stats.map((stat) => {
    return newStats.push(Math.floor(stat * statRandomizer + level));
  });
  return newStats;
};

export const generatePokemonCost = (baseXP) =>{

  let price = Math.floor(0.3*baseXP);
  return price
}


export const generatePokemonPrice = (level) =>{
    // const level = generatePokemonLevel(baseXP);
    let price = Math.floor(Math.random()*(level-0.5*level)+0.5*level)
    return price
}
