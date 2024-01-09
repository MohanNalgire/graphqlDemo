module.exports = {
  toggleFavoriteSession: (_parent, { id }, { datasource }, _info) =>
    datasource.sessionAPI.toggleFavoriteSession(id),
  addNewSession: (_parent, { _id }, { datasource }, _info) =>
    datasource.sessionAPI.addSession(args),
};
