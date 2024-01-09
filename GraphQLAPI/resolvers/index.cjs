const Query = require('./query.cjs');
const Session = require('./session.cjs');
const Mutation = require('./mutation.cjs');

const resolvers = {
  Mutation,
  Query,
  Session,
};

module.exports = resolvers;
