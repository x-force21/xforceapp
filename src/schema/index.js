const{buildSchema,graphql}=require('graphql');
const express=require('express');
const{graphqlHTTP}=require('express-graphql');
const { UserInputError } = require('apollo-server-errors');
const app=express();
const port=process.env.port||3000

module.exports=buildSchema(graphql`
type User {
  _id: ID!
  email:String!
  "contraseña":String!,
  documentId:String!,
  documentType:String!,
  nombre:String!,
  apellido:String!,
  rol:String!,
  estado: String!,
}
type Proyecto{
  codigoProyecto:String!,
  nombre:String!,
  objetivos:Objetivos,
  presupuesto:Presupuesto,
  fInicio:ISODate!,
  fFinal:ISODate,
  estadoProyecto:String!, //activo inactivo
  fase:String!,
  avances:[Avances],
}
type Objetivos{
  generales:String!,
  especificos:[String!],
}
type Presupuesto{
  total:Int!,
  moneda:String!,
  gastado:Int!,
}
type Avances{
  fecha:ISODate!,
  descripcion:String!,
  LeadObserv:String,
}
input UserType {
  user:[User!],
}
input ProyectType{
  proyecto:[Proyecto!],
}
type RootQuery {
  users: [User!]
  user(_id: String!): User!
  proyects:[Proyecto!]
  proyect(codigoProyecto:String!): Proyecto!
}
type Mutation {
  createUser(user:UserType): User,
  deleteUser(_id: String!): User,
  updateUser(_id: String, user:UserType): User
  createProyect(proyect:ProyectType): Proyecto,
  deleteProyect(codigoProyecto: String!): Proyecto,
  updateProyect(codigoProyecto: String, proyect:ProyectType): Proyecto
}
schema {
  query: RootQuery
  mutation: Mutation
}
`);
