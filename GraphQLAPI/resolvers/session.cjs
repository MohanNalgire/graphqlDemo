const _ = require('lodash');

module.exports = {
  speakers: async (session, _args, { dataSources }, _info) => {
    const speakers = await dataSources.speakerAPI.getSpeakers();
    const returns = speakers.filter(
      (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0,
    );
    return returns;
  },
};
