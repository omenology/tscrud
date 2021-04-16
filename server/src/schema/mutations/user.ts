import {GraphQLString} from 'graphql'
import {userType} from '../typeDefs/user'
export const CREATE_USER = {
    type: userType,
    args:{
        name: {type:GraphQLString},
        username: {type:GraphQLString},
        password: {type:GraphQLString},
    },
    resolve(parent:any, args:any){
        console.log(parent,args)
        const {name,username,password} = args
        return args
    }
}