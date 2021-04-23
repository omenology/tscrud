import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
} from "graphql";
import { userType } from "./user";

export const productType = new GraphQLObjectType({
  name: "product",
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    addBy: { type: userType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});
