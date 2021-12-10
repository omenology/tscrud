import { GraphQLList, GraphQLString } from "graphql";

import { generateToken } from "../../../helpers/jwt";
import { userType } from "../typeDefs/user";
import { userModel } from "../../model";

export const GET_ALL_USER = {
  type: new GraphQLList(userType),
  resolve: async (source: any, args: any, context: any) => {
    console.log(context);
    if (!context) return new Error("not authorized");
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
    const userData = await userModel.findOne({
      username,
      password,
    });
    if (!userData) return new Error("Wrong Username or Password");

    const token = generateToken({
      _id: userData._id,
      name: userData.name,
      username: userData.name,
    });

    return token;
  },
};
