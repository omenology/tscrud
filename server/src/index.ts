// Library import
import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import connection from "./helpers/connection";
import { verivyToken } from "./helpers/jwt";
import { schema } from "./data/graphql";

// init express app
const app: Express = express();
// cors
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded());

// auth
app.use((req: any, res, next) => {
  req.user = false;
  const authorization = req.header("authorization");
  if (authorization) {
    const [type, token] = authorization.split(" ");
    req.user = verivyToken(token);
  }
  next();
});

// graphql init
app.use(
  "/graphql",
  graphqlHTTP((req: any) => ({
    schema,
    graphiql: true,
    context: req.user,
    customFormatErrorFn: (err) => {
      if (!err.originalError) {
        return { message: err.message };
        //return err;
      }
      return { message: err.message };
    },
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
