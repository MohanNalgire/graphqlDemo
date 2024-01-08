const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
    constructor(){
        super();
    }

    initialize(config){}

    getSessions(args){
        return _.filter(sessions, args);
    }

    getSessionById(id){
        const sessions =_.filter(sessions, {id:parseInt(id)});
        return sessions[0];
    }
}

module.exports = SessionAPI;