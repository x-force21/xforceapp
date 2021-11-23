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
])