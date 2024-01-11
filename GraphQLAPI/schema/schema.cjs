const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Room {
    EUROPA
    SOL
    SATURN
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
  }

  type Query {
    sessions(
      id: ID
      title: String
      description: String
      statsAt: String
      endsAt: String
      room: Room
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }
  type Session {
    id: ID!
    title: String!
    description: String
    statsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String @deprecated(reason: "not used now")
    level: String
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
    favorite: Boolean
  }
  type Speaker {
    id: ID!
    bio: String
    sessions: [Session]
  }
`;

module.exports = typeDefs;
