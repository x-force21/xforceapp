'use strict'

const { MongoClient } = require ('mongodb')
const {
    DB_USER,
    DB_PASSWD,
    DB_CLUSTER,
    DB_NAME
} = process.env


//const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_CLUSTER}/${DB_NAME}`
const mongoUrl = `mongodb+srv://ruben:rubencho@cluster0.qbwzy.mongodb.net/x-force`
let connection

async function connectDB (){
    if(connection) return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true
        })
        connection = client.db(DB_NAME)

    } catch (error) {
        console.error('Could not connect to db', mongoUrl,error)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB