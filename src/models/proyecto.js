const mongoose=require('mongoose');
const Schema=mongoose.Schema

const proyectSchema=new Schema(
  {
    codigoProyecto:{
      type:String,
      required:true
    },
    nombre:String!,
    objetivos:Objetivos,
    presupuesto:Presupuesto,
    fInicio:ISODate!,
    fFinal:ISODate,
    estadoProyecto:String!, //activo inactivo
    fase:String!,
    avances:[Avances],
  }
)

