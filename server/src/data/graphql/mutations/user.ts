import { GraphQLString } from "graphql";
import { userType } from "../typeDefs/user";
import { userModel } from "../../model";

export const CREATE_USER = {
  type: userType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (source: any, args: any) => {
    const userData = await userModel.create({
      ...args,
    });

    return userData;
  },
};
