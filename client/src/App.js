import React, { useState, useEffect } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
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
import ScrollToTop from "./utils/ScrollToTop";
import PokeStorePage from "./pages/PokeStorePage";

export const PokedexContext = React.createContext();

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
  const [isLoading, setIsLoading] = useState(true);

  const populateData = async () => {
    //pokeAPI fetch and map url results 
    const response = await pokeAPI.get("/pokemon/", {});
    const URLs = response.data.results.map((pokemon) => pokemon.url);
    // return data as promises for each pokemon's URL 
    const res = URLs.map(async (url) => {
      return await axios.get(url);
    });
    //resolve promises, set Pokedex data, isLoading = false 
    const resolvedData = await Promise.all(res);
    setPokedex(resolvedData.map((el) => el.data));
    setIsLoading(false);
  };

  //on app load, call our fetch function
  useEffect(() => {
    // on load, fetch pokemon data and save to state
    populateData();
  }, []);

  const pokemonContextValue = {
    pokedex,
    isLoading,
  };

  console.log(pokedex);

  return (
    <ApolloProvider client={client}>
      <PokedexContext.Provider value={pokemonContextValue}>
        <Router>
          <div>
            <ScrollToTop />
            <Nav />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/trade" component={PokeStorePage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/trainers" component={TrainersPage} />
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
