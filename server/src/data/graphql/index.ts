import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USER, LOGIN } from "./queries/user";
import { GET_ALL_PRODUCTS, GET_PRODUCT } from "./queries/product";
import { CREATE_USER } from "./mutations/user";
import { CREATE_PRODUCT } from "./mutations/product";

const query = new GraphQLObjectType({
  name: "queries",
  fields: {
    getAllUsers: GET_ALL_USER,
    getAllProducts: GET_ALL_PRODUCTS,
    getProduct: GET_PRODUCT,
    login: LOGIN,
  },
});

const mutation = new GraphQLObjectType({
  name: "mutatuions",
  fields: {
    createUser: CREATE_USER,
    createProduct: CREATE_PRODUCT,
  },
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});
