'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require ('fs')
const { join } = require ('path')
var path = require("path");
const resolvers = require ('./lib/resolvers')
const cors = require('cors');

const app = express()
const PORT = process.env.port || 9000
//const PORT = 3001 || 9000;
const hostname = "0.0.0.0";

const typeDefs = readFileSync (
    join (__dirname, 'lib', 'schema.graphql' ),
    'utf-8'
)

const schema = makeExecutableSchema({
    typeDefs, resolvers
})

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


app.use ('/api', graphqlHTTP ({
    schema: schema,
    rootValue : resolvers, 
    graphiql: true
}))

var server = app.listen (PORT, hostname, () => {
    console.log (`Server is listening at http://${hostname}:${PORT}/api`)
    console.log ("Server port "+ server.address().port)
})