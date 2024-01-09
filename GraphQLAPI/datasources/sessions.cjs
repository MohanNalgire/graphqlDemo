const { DataSource } = require('apollo-datasource');
const _ = require('lodash');
const Sessions = require('../data/sessions.json');

class SessionAPI extends DataSource {
  config;

  sessions = Sessions;

  initialize(config) {}

  getSessions(args) {
    return _.filter(this.sessions, args);
  }

  getSessionById(id) {
    const sessions = _.filter(this.sessions, { id: parseInt(id, 10) });
    return sessions[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(this.sessions, { id: parseInt(id, 10) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addSession(session) {
    this.sessions.push(session);
    console.log(session);
  }
}

module.exports = SessionAPI;
