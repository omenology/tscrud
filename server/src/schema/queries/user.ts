import {GraphQLList} from 'graphql'
import {userType} from '../typeDefs/user'

export const GET_ALL_USER = {
    type: new GraphQLList(userType),
    resolve(){
        return [{name:"lalal"},{name:'lululu'}]
    }
}