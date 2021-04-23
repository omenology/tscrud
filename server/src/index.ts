// Library import
import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import connection from "./helpers/connection";
import { schema } from "./data/graphql";

// init express app
const app: Express = express();

// cors
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth
app.use((req: any, res, next) => {
  req.user = {
    _id: "607e8d398bd4d10c042fa490",
    name: "tes",
  };
  console.log(req.get("Authorization"));
  next();
});

// graphql init
app.use(
  "/graphql",
  graphqlHTTP((req: any) => ({
    schema,
    graphiql: true,
    context: req.user,
  }))
);

connection
  .then(() => {
    app.listen(4000);
    console.log("connected to db and app listen on port 4000");
  })
  .catch((err) => {
    console.log(err);
  });
