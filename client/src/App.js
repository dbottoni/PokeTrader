import React, { useState, useEffect } from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import pokeAPI from "./utils/pokeAPI";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';

import PokeStorePage from "./pages/PokeStorePage";

export const PokedexContext = React.createContext()

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});


function App() {
  //set state at APP level to track all pokemon in our pokedexDB
  const [pokedex, setPokedex] = useState([]);
  
  
useEffect(() => {
    // on load, fetch pokemon data and save to state
    populateData();
    
  }, []);
  
  
  const populateData = async () => {
    let pokedexData = [];
    
    const response = await pokeAPI.get("/pokemon/", {});
    const URLs = response.data.results.map((pokemon) => pokemon.url);
    URLs.map(async (url) => {
      const res = await axios.get(url)

     return pokedexData.push(res.data);
      
    });
    setPokedex(pokedexData)
  };

  const pokemonContextValue = {
    pokedex
  }
  
  return (
    <ApolloProvider client = {client} >
    <PokedexContext.Provider value={pokemonContextValue}>
      <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/trade"
              component={PokeStorePage}
              // pokedex={pokedex}
            />
                        <Route
              exact
              path="/about"
              component={About}
              // pokedex={pokedex}
            />

            <Route exact path="/team" component={Team} />
              {/* <Route exact path="/products/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
    </PokedexContext.Provider>
    </ApolloProvider>
  );
}


export default App;

