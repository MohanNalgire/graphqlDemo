const { gql } = require('apollo-server');

const typeDefs = gql`
type Query{
    sessions(
    id:ID,
    title:String,
    description: String,
    statsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format:String,
    track:String,
    level:String
    ):[Session]
    sessionById(id:ID):Session,
    speakers:[Speaker],
    speakerById(id:ID):Speaker
},
type Session {
    id:ID!,
    title:String!,
    description: String,
    statsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format:String,
    track:String @deprecated(reason:"not used now"),
    level:String,
    sessionById(id:ID):Session,
    speakers:[Speaker],
    speakerById(id:ID):Speaker
}
type Speaker{
    id:ID!,
    bio:String,
    sessions:[Session]
}
`


module.exports = typeDefs;