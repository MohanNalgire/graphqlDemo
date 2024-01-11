const Query = require('./query.cjs');
const Session = require('./session.cjs');
const Mutation = require('./mutation.cjs');


const resolvers = {
  Mutation,
  Query,
  Session,
  Room: {
    EUROPA: 'Europa',
    SOL: 'Sol',
    SATURN: 'Saturn',
  },
  /*
  SessionOrError:{
    _resolveType(obj){ 
    if(obj.code){
        return "Error"
    }
    return 'Session'
}
}
*/
};

module.exports = resolvers;
