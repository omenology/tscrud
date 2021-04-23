import { GraphQLID, GraphQLString, GraphQLFloat } from "graphql";
import { productType } from "../typeDefs/product";
import { productModel } from "../../model";
export const CREATE_PRODUCT = {
  type: productType,
  args: {
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
  },
  resolve: async (source: any, args: any, context: any) => {
    const userData = await productModel.create({
      ...args,
      addBy: context._id,
    });
    console.log(userData);
    return userData;
  },
};
