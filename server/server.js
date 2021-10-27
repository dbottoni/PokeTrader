const express = require('express');
const path = require('path');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;


const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: authMiddleware
  });
    // Start the Apollo server
    await server.start();
    // integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app, bodyParserConfig: { limit: '2mb'} });
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  };
// Initialize the Apollo server
startServer();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
