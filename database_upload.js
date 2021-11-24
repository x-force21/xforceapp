db.proyectos.insertMany([
  {
    codigoProyecto:"ING0001",
    nombre:"Semillero de la vida eterna",
    objetivos:{
      generales:"Activar los ciclos de regeneracion celular a demanda",
      especificos:[
        "Secuencia genetica para la activacion de la regeneracion celular",
        "Generar un farmaco activador","Entregar los papers bajo licencia libre"
      ]
    },
    Presupuesto:{
      total:100000,
      moneda:"COP",
      gastado:41500,
    },
    fInicio:ISODate("2020-12-03"),
    fFinal:ISODate("2021-10-10"),
    estadoProyecto:"inactivo", //activo inactivo
    fase:"finalizado", //iniciado, en desarrollo, finalizado
    avances:[
    {
      fecha:ISODate("2021-12-05"),
      descripcion:"dividimos el equipo en 2 partes para ir avanzando",
      LeadObserv:"Verificado",
    },
    {
      fecha:ISODate("2021-10-04"),
      descripcion:"Se envia el proyecto final al area de semilleros",
      LeadObserv:"Verificado",
    },

    ]
  },
  {
    codigoProyecto:"ING0002",
    nombre:"Semillero ingenieros electricos",
    objetivos:{
      generales:"Desarrollar nuevas tecnicas de produccion energetica",
      especificos:[
        "Desarrollar modelos funcionales de energia limpia para presupuestos bajos",
        "Diseñar prototipos de energia de fusion fria"
      ]
    },
    Presupuesto:{
      total:1500000,
      moneda:"COP",
      gastado:365000,
    },
    fInicio:ISODate("2021-01-15"),
    fFinal:ISODate("2026-01-14"),
    estadoProyecto:"activo", //activo, inactivo
    fase:"en desarrollo", //iniciado, en desarrollo, finalizado
    avances:{
      fecha:ISODate("2021-01-22"),
      descripcion:"Tuvimos una charla por parte de Elon Musk sobre energia geotermica",
      LeadObserv:"Aprobado",
    }
  },
  {
    codigoProyecto:"ING0003",
    nombre:"Semillero de Transporte",
    objetivos:{
      generales:"mejorar los tiempos de movilidad urbana",
      especificos:[
        "Implementar primer sistema de teletransportacion",
        "Diseñar prototipos de energia de fusion fria"
      ]
    },
    Presupuesto:{
      total:900000,
      moneda:"COP",
      gastado:15000,
    },
    fInicio:ISODate("2021-12-24"),
    fFinal:ISODate("2030-01-01"),
    estadoProyecto:"activo", //activo, inactivo
    fase:"iniciado", //iniciado, en desarrollo, finalizado
    avances:{
      fecha:ISODate("2021-01-22"),
      descripcion:"Tuvimos una charla por parte de Elon Musk sobre energia geotermica",
      LeadObserv:"Aprobado",
    }
  },
  {
    codigoProyecto:"ING0004",
    nombre:"Semillero Sicología y neurociencias",
    objetivos:{
      generales:"Investigación de seres no etereos",
      especificos:[
        "Desarrollar una herramienta para diagnosticar el alma humana",
        "Diseñar prototipos para comunicacion con seres no etereos"
      ]
    },
    Presupuesto:{
      total:2000000,
      moneda:"COP",
      gastado:1600000,
    },
    fInicio:ISODate("2019-01-24"),
    fFinal:ISODate("2021-12-31"),
    estadoProyecto:"activo", //activo, inactivo
    fase:"en desarrollo", //iniciado, en desarrollo, finalizado
    avances:{
      fecha:ISODate("2021-08-22"),
      descripcion:"Logramos crear una maquina para hablar con los no etereos, tomaremos como sujeto de pruebas el niño Dios",
      LeadObserv:"en revision",
    }
  },
  {
    codigoProyecto:"ING0005",
    nombre:"Grupo de investigacion de ciencias Naturales",
    objetivos:{
      generales:"Mejorar la comunicacion con los seres vivos",
      especificos:[
        "Hablar con animales",
        "Hablar con plantas"
      ]
    },
    Presupuesto:{
      total:1800000,
      moneda:"COP",
      gastado:1000000,
    },
    fInicio:ISODate("2022-01-01"),
    fFinal:ISODate("2023-12-31"),
    estadoProyecto:"inactivo", //activo, inactivo
    fase:"iniciado", //iniciado, en desarrollo, finalizado
    avances:{
      fecha:ISODate("2021-11-22"),
      descripcion:"estamos conformando el equipo",
      LeadObserv:"aprobado",
    }
  },
])
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
db.users.insertMany([
  {
    email:"user1@udea.edu.co",
    contraseña:"ZCd3ljwpbVsi",
    documentId:"1001",
    documentType:"CID",
    nombre:"Pastora",
    apellido:"Soto",
    rol:"lider", //Admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0001",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")},
      {codigoProyecto:"ING0002",inscripcion:"rechazada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("2020-12-03")}
    ]
  },
  {
    email:"user2@udea.edu.co",
    contraseña:"AawdSM6Q27tT8U7",
    documentId:"1002",
    documentType:"CID",
    nombre:"Maria Jose",
    apellido:"Montes",
    rol:"estudiante", //Admin, estudiante, lider
    estado: "pendiente", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0001",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user3@udea.edu.co",
    contraseña:"AawdSM6Q27tT8U7",
    documentId:"1003",
    documentType:"CID",
    nombre:"Maria Jose",
    apellido:"Montes",
    rol:"estudiante", //Admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0001",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user4@udea.edu.co",
    contraseña:"fEaRlSZ54VMjuAu",
    documentId:"1004",
    documentType:"CID",
    nombre:"Brenda",
    apellido:"Huertas",
    rol:"estudiante", //Admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0001",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user5@udea.edu.co",
    contraseña:"fEaRlSZ54VMjuAu",
    documentId:"1005",
    documentType:"CID",
    nombre:"Luca",
    apellido:"Viñas",
    rol:"estudiante", //admin, estudiante, lider
    estado: "pendiente", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0001",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user6@udea.edu.co",
    contraseña:"znEYMnm1544DQC1",
    documentId:"1006",
    documentType:"CID",
    nombre:"Dominga",
    apellido:"Guzman",
    rol:"lider", //Admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0002",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user7@udea.edu.co",
    contraseña:"buZQRTRYw2I99jn",
    documentId:"1007",
    documentType:"CID",
    nombre:"Mihai",
    apellido:"de Leon",
    rol:"estudiante", //Admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0002",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user8@udea.edu.co",
    contraseña:"zZs2is5G1ZpXB7w",
    documentId:"1008",
    documentType:"CID",
    nombre:"Ona",
    apellido:"Barranco",
    rol:"estudiante", //Admin, estudiante, lider
    estado: "no autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0002",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user9@udea.edu.co",
    contraseña:"X7Z0EETSZXc5J6V",
    documentId:"1009",
    documentType:"CID",
    nombre:"Marcial",
    apellido:"Granado",
    rol:"estudiante", //Admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0002",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user10@udea.edu.co",
    contraseña:"mv7PHSU3VGv50Ga",
    documentId:"1010",
    documentType:"CID",
    nombre:"Loreto",
    apellido:"Caamaño",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0002",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user11@udea.edu.co",
    contraseña:"CwaeGlYqRXONUrC",
    documentId:"1011",
    documentType:"CID",
    nombre:"Nahia",
    apellido:"Zapata",
    rol:"lider", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0003",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user12@udea.edu.co",
    contraseña:"47TCfETEBvlTbGW",
    documentId:"1012",
    documentType:"CID",
    nombre:"George",
    apellido:"Ochoa",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0003",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user13@udea.edu.co",
    contraseña:"AgEvhIMo7ndV9qK",
    documentId:"1013",
    documentType:"CID",
    nombre:"Gladys",
    apellido:"Mellado",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0003",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user14@udea.edu.co",
    contraseña:"gCwdVODN8ok2Fwp",
    documentId:"1014",
    documentType:"CID",
    nombre:"Margarita",
    apellido:"Pazos",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0003",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user15@udea.edu.co",
    contraseña:"VglmAD6ly14J0XI",
    documentId:"1015",
    documentType:"CID",
    nombre:"Ariana",
    apellido:"Moya",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0003",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user16@udea.edu.co",
    contraseña:"rAhtqvhpaGu9Sis",
    documentId:"1016",
    documentType:"CID",
    nombre:"Ignacia",
    apellido:"Tejera",
    rol:"lider", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0004",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user17@udea.edu.co",
    contraseña:"z1FjuA1bvSYWjGe",
    documentId:"1017",
    documentType:"CID",
    nombre:"Hilario",
    apellido:"Ramiro",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0004",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user18@udea.edu.co",
    contraseña:"VUI85V20xkECYqy",
    documentId:"1018",
    documentType:"CID",
    nombre:"Bienvenido",
    apellido:"Rubio",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0004",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user19@udea.edu.co",
    contraseña:"XuIXzwWHU9G4Vfq",
    documentId:"1019",
    documentType:"CID",
    nombre:"Saida",
    apellido:"Berrocal",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0004",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user20@udea.edu.co",
    contraseña:"Um2jSwlTX91AnIi",
    documentId:"1020",
    documentType:"CID",
    nombre:"Jordi",
    apellido:"Lamas",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0004",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user21@udea.edu.co",
    contraseña:"7pH2Bw7XV7zl2lQ",
    documentId:"1021",
    documentType:"CID",
    nombre:"Teodoro",
    apellido:"Padilla",
    rol:"lider", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0005",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user22@udea.edu.co",
    contraseña:"G8XlFz5Gb8IqWe3",
    documentId:"1022",
    documentType:"CID",
    nombre:"Coral",
    apellido:"Zaragoza",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0005",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user23@udea.edu.co",
    contraseña:"pjjNAfmCiEiLRB3",
    documentId:"1023",
    documentType:"CID",
    nombre:"Irati",
    apellido:"Lago",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0005",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user24@udea.edu.co",
    contraseña:"SveP0e41DiyjJNq",
    documentId:"1024",
    documentType:"CID",
    nombre:"Susana",
    apellido:"Hurtado",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0005",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"user25@udea.edu.co",
    contraseña:"4H9V49TEfKhSUtE",
    documentId:"1025",
    documentType:"CID",
    nombre:"Jacqueline",
    apellido:"Mansilla",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0005",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
  {
    email:"userAdmin@udea.edu.co",
    contraseña:"4H9V49TEfKhSUtE",
    documentId:"1100",
    documentType:"CID",
    nombre:"Ona",
    apellido:"Jimenez",
    rol:"estudiante", //admin, estudiante, lider
    estado: "autorizado", //autorizado,pendiente,no autorizado
    inscripciones:[
      {codigoProyecto:"ING0005",inscripcion:"aceptada",fechaIngreso:ISODate("2020-12-03"),fechaEgreso:("")}
    ]
  },
])