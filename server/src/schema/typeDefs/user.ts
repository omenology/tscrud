import {GraphQLObjectType, GraphQLID,GraphQLString} from 'graphql'

export const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: {type:GraphQLID},
        name: {type:GraphQLString},
        username: {type:GraphQLString},
        password: {type:GraphQLString},
    }
})