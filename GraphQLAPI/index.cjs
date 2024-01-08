const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/sessions.cjs');
const resolvers = require('./resolvers/index.cjs');
const dataSources = require('./datasources/index.cjs');

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources
});

server
    .listen({ port: process.env.PORT | 4000 })
    .then(({ url })=>console.log(`Our server is running on ${url}`));