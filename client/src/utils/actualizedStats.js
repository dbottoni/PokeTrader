//generate random level by base experience?
//base xp, highest and lowest I see: 39-306(Blissy wtf?: 608 Chansey: 395)
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

// console.log(generatePokemonLevel(142));

//takes stats as array of base stats and returns actualized stats
export const generatePokemonStats = (stats, level) => {
  let newStats = [];

  let statRandomizer = Math.random() + Math.random();
  // console.log("STAT MULTIPLIER");
  // console.log(statRandomizer);

  stats.map((stat) => {
    return newStats.push(stat * statRandomizer + level);
  });
  return newStats;
};
// console.log(generatePokemonStats([83, 80, 75, 70, 70, 101], 38));

// make these functions async and call them together when the pokemon is bought?
//generatePokemonStats needs access to level
