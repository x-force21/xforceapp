'use strict'

const connectDB = require ('./db')
const { ObjectId } = require ('mongodb')
const projectsColletionName = 'proyectos';
const errorHandler = require('./errorHandler');
module.exports = {
   
    getUsers: async () => {
            let db
            let users = []
            try {
                db = await connectDB()
                users = await db.collection('users').find().toArray()
            } catch (error) {
                console.error(error)
            }
            return users
        },
        getUser: async (root, { id }) => {
            let db 
            let user
            try {
                db = await connectDB ()
                user = await db.collection('users').findOne({_id: ObjectId(id)})
            } catch (error) {
                console.error(error)
            }        
            return user
        },
        getProjects: async () => {
            let db;
            let projects = [];
            try{
                db = await connectDB();
                projects = await db.collection(projectsColletionName).find().toArray();
            }catch(error){
                errorHandler(error);
            }
            return projects;
        },
        getProject: async (root, { projectCode, projectName}) => {
            let db;
            let project;
            try{
                db = await connectDB();
                project = await db.collection(projectsColletionName).findOne({$or:[{codigoProyecto: projectCode}, {nombre: projectName}]});
            }catch(error){
                errorHandler(error);
            }
            return project;
        }
    }