import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const userType = new GraphQLObjectType({
  name: "user",
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});
