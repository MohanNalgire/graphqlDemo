const { ApolloServer, ApolloError } = require('apollo-server');
const typeDefs = require('./schema/schema.cjs');
const resolvers = require('./resolvers/index.cjs');
const dataSources = require('./datasources/index.cjs');

// Apollo server configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  debug:false,
  formatError:(error)=>{
    if(error.extensions.code =="INTERNAL_SERVER_ERROR")
    {
      return new ApolloError("We have error in apollo server.", "ERROR", {token:"uniquetoken"});
    }
  }
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Our server is running on ${url}`))
  .catch((error) => console.error('Some error:', error));
