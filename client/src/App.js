import React, { useState, useEffect } from "react";
import pokeAPI from "./utils/pokeAPI";
// import { pokemonJSON } from './utils/pokeAPI';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import PokeStorePage from "./pages/PokeStorePage";


import NoMatch from "./pages/NoMatch";


function App() {
  //set state at APP level to track all pokemon in our pokedexDB
  const [pokedex, setPokedex] = useState([]);
  console.log(pokedex);

  //useEffect to call our API file on App load and setPokedex to the returned array of pokemon
  useEffect(() => {
    //pokemon getAll fetch
    pokeAPI
      .get("/pokemon/", {})
      .then((response) => {
        console.log("RESPONSE");
        console.log(response);
        console.log(response.data.results);

        const pokemonURL = response.data.results.map((pokemon) => {
          return pokemon.url;
        });

        //sets pokemon to array of urls, how do we use this/ store it
        //lets probably use useStoreContext
        setPokedex(pokemonURL);
      })
      .catch((err) => console.log(err));

    //[] run once on app load
  }, []);

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
            <Route exact path="/404" component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
