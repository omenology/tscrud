import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_USER} from './queries/user'
import {CREATE_USER} from './mutations/user'

const query = new GraphQLObjectType({
    name:'rootQuery',
    fields:{
        getAllUsers:GET_ALL_USER
    }
})

const mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        createUser:CREATE_USER
    }
})

export const schema = new GraphQLSchema({
    query,
    mutation
})