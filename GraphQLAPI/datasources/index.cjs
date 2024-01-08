const SessionAPI = require('./sessions.cjs');
const SpeakerAPI = require('./speakers.cjs');

const dataSources = () =>({
    sessionAPI: new SessionAPI(),
    speakerAPI: new SpeakerAPI() 
});

module.exports = dataSources;