import React, { useState, useEffect } from "react";
import pokeAPI from "./utils/pokeAPI";
import axios from "axios";
import {
  generatePokemonStats,
  generatePokemonLevel,
} from "./utils/actualizedStats";

import { setCardColor } from "./utils/helpers";
import { capitalizeName } from "./utils/helpers";
import { pokemonJSON } from './utils/pokeAPI';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import PokeStorePage from "./pages/PokeStorePage";
import NoMatch from "./pages/NoMatch";


import PokeStorePage from "./pages/PokeStorePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  //set state at APP level to track all pokemon in our pokedexDB
  const [pokedex, setPokedex] = useState([]);
  console.log("POKEDEX");
  console.log(pokedex);
  
  let isLoading = true;

  let pokedexData = [];

  

  useEffect(() => {
    // on load, fetch pokemon data and save to state
    populateData();

  }, []);
  
  const populateData = async () => {
    
    const response = await pokeAPI.get("/pokemon/", {});
    const URLs = response.data.results.map((pokemon) => pokemon.url);
    console.log('URLS--------');
    console.log(URLs);
    URLs.map(async (url) => {
      const res = await axios.get(url)

      pokedexData.push(res.data);
      
    });
    
    isLoading = false;
  };
  



  return (
    <Router>
    <div>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} /> */}
          <Route
            exact
            path="/trade"
            component={PokeStorePage}
            pokedex={pokedex}
          />
          <Route exact path="/team" component={Team} />
            {/* <Route exact path="/products/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>

  );
}


export default App;




///store only maps one on first render 




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
