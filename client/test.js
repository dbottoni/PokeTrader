import createHttpLink  from '@apollo/client';
const httpLink = createHttpLink({
    uri: '/graphql',
  });
console.log(httpLink)