import React, { useState, useEffect } from "react";
import pokeAPI from "./utils/pokeAPI";
import axios from "axios";
import {
  generatePokemonStats,
  generatePokemonLevel,
} from "./utils/actualizedStats";
import { setCardColor } from "./utils/helpers";

import PokeStorePage from "./pages/PokeStorePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  //set state at APP level to track all pokemon in our pokedexDB
  const [pokedex, setPokedex] = useState([]);
  console.log("POKEDEX");
  console.log(pokedex);


  useEffect(() => {
    // on load, fetch pokemon data and save to state
    const populateData = async () => {
      const pokedexData = [];

      const response = await pokeAPI.get("/pokemon/", {});
      const URLs = response.data.results.map((pokemon) => pokemon.url);
      
      URLs.map((url) => {
        axios.get(url).then((res) => {
          pokedexData.push(res.data);

          setPokedex(pokedexData);
        });
      });
    };
    populateData();
  }, []);

  return (
    //conditionally render pages
    <PokeStorePage pokedex={pokedex} />
    // <ProfilePage />
  );
}

export default App;









// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem("id_token");

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   uri: "/graphql",
// });

//or use Context.Provider?
//export const PokemonStoreContext = React.createContext()

// {/* <ApolloProvider client = {client} >
// <Router>
//   <>
//     <Switch>
//       <Route exact path='/' component={PokemonStorePage} />
//       <Route exact path='/profile' component={ProfilePage} />
//       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//     </Switch>
//   </>
// </Router>
// </ ApolloProvider> */}
