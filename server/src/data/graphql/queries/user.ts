import { GraphQLList, GraphQLString } from "graphql";
import { userType } from "../typeDefs/user";
import { userModel } from "../../model";

export const GET_ALL_USER = {
  type: new GraphQLList(userType),
  resolve: async () => {
    const usersData = await userModel.find();

    return usersData;
  },
};

export const LOGIN = {
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (source: any, args: any) => {
    const { username, password } = args;
    const userData = await userModel.findOne({ username, password });
    console.log(userData);
    if (!userData) return new Error("Wrong Username or Password");

    return `${args.username} dan ${args.password}`;
  },
};
