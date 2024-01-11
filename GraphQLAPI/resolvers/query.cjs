const { default: dataSources } = require("../datasources/index.cjs");

module.exports = {
  sessions: (_parent, args, { dataSources }, _info) =>
    dataSources.sessionAPI.getSessions(args),
  sessionById: (_parent, { id }, { dataSources }, _info) =>
    dataSources.sessionAPI.getSessionById(id),
  speakers: (_parent, args, { dataSources }, _info) =>
    dataSources.speakerAPI.getSpeakers(args),
  speakerById: (_parent, { id }, { dataSources }, _info) =>
    dataSources.speakerAPI.getSpeakerById(id),
  
};
