import React, { useState, useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import pokeAPI from "./utils/pokeAPI";
import axios from "axios";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import NoMatch from "./pages/NoMatch";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Stripe from './pages/Stripe';
import TrainersPage from "./pages/TrainersPage";

import PokeStorePage from "./pages/PokeStorePage";

export const PokedexContext = React.createContext()

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
            <Route exact path="/stripe" component={Stripe} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/trainers" component={TrainersPage} />
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

