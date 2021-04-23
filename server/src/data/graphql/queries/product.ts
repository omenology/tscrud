import { GraphQLID, GraphQLList } from "graphql";
import { productType } from "../typeDefs/product";
import { productModel } from "../../model";

export const GET_ALL_PRODUCTS = {
  type: new GraphQLList(productType),
  resolve: async () => {
    const productsData = await productModel.find();

    return productsData;
  },
};

export const GET_PRODUCT = {
  type: productType,
  args: {
    _id: { type: GraphQLID },
  },
  resolve: async (source: any, args: any) => {
    const productData = await productModel.findById(args._id).populate("addBy");
    console.log(productData);
    return productData;
  },
};
