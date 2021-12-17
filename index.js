'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require ('fs')
const { join } = require ('path')
const resolvers = require ('./lib/resolvers')
const cors = require('cors');

const app = express()
const PORT = process.env.port || 3001
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

app.use ('/api', graphqlHTTP ({
    schema: schema,
    rootValue : resolvers, 
    graphiql: true
}))

app.listen (PORT, hostname, () => {
    console.log (`Server is listening at http://${hostname}:${PORT}/api`)
})