// Library import
import express,{Express} from 'express'
import {graphqlHTTP} from 'express-graphql'
import cors from 'cors'

import connection from './helpers/connection'
import {schema} from './schema'

// init express app
const app:Express = express()

// cors
app.use(cors())

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// graphql init
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))

connection.then(()=>{
    app.listen(4000)
    console.log("connected to db and app listen on port 4000");
}).catch(err=>{
    console.log(err)
})