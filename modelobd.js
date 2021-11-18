// NEW BEGINS
//usuarios
db.users.insertMany([
        {
                email:"psoto@udea.edu.co",
                contraseña:"ZCd3ljwpbVsi",
                documentId:"1000",
                documentType:"CID"
                nombre:"Pastora",
                apellido:"Soto"
                rol:"Admin",
                status: true,
                //codigoProyecto,rolProyecto,fechaIngreso,fechaEgreso
                proyectos:[("ING0003","lider",ISODate(2021-10-15),ISODate("")),("ADM1020","miembro",ISODate(2021-10-15),ISODate(""))],
        }
])

db.proyectos.insertMany([
        {
                CodigoProyecto:"ING0003",
                nombre:"Semillero de la vida eterna",
                objetivos:{
                        generales:"Activar los ciclos de regeneracion celular a demanda",
                        especificos:[
                                "Secuencia genetica para la activacion de la regeneracion celular",
                                "Generar un farmaco activador","Entregar los papers bajo licencia libre"
                        ]
                }
                Presupuesto:{
                        total:100000,
                        moneda:"COP",
                        gastado:41500;
                }
                fInicio:ISODate("2020-12-03"),
                fFinal:ISODate(""),
                estadoProyecto:true,
                fase:"Iniciado"
        }
])

db.roles.insertMany([
        {
                rol:"admin",
                gestionUsuarios:true,
                gestionProyecto:true,
                gestionMiembros:true,
                gestionPerfil:true
        },
        {
                rol:"lider",
                gestionUsuarios:false,
                gestionProyecto:true,
                gestionMiembros:true,
                gestionPerfil:true
        },
        {
                rol:"miembro",
                gestionUsuarios:false,
                gestionProyecto:false,
                gestionMiembros:false,
                gestionPerfil:true
        }
])
