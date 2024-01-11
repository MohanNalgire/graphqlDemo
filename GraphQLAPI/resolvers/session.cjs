const { ApolloError } = require('apollo-server');
const _ = require('lodash');

module.exports = {
  speakers: async (session, _args, { dataSources }, _info) => {
    try{
      const speakers = await dataSources.speakerAPI.getSpeakers();
    const returns = speakers.filter(
      (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0,
    );
    return returns;
    }catch(error){
      return new ApolloError('We are having error in resolvers.', "SPEAKERSERROR", {token:'UNIQUETOKEN'});
    }
  },
};
