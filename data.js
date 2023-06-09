module.exports = function () {
  var data = {
    cuestionario: [
      {
        id: 1,
        tipo_form: "Largo",
        Uso_de_PC: "Edicion",
        Presupuesto: "Media-Alta",
        Tamano_del_PC: "Estandar-(ATX)",
        Diseno: "Minimalista",
        Tipo_de_refrigeracion: "Aire",
        Overclocking: false,
        Marca_Procesador: "Intel",
        Programas_used: "Adobe Premiere Pro 2022, Vegas Pro 18",
      },
      {
        id: 2,
        tipo_form: "Largo",
        Uso_de_PC: "Estudios",
        Presupuesto: "Economica",
        Tamano_del_PC: "Estandar-(ATX)",
        Diseno: "RGB",
        Tipo_de_refrigeracion: "Stock",
        Overclocking: false,
        Marca_Procesador: "AMD",
        Programas_used: "",
      },
      {
        id: 3,
        tipo_form: "Corto",
        Uso_de_PC: "Alta",
        Presupuesto: "",
        Tamano_del_PC: "Estandar-(ATX)",
        Diseno: "RGB",
        Tipo_de_refrigeracion: "",
        Overclocking: false,
        Marca_Procesador: "AMD",
        Programas_used: "OBS,Photoshop",
      },
      {
        id: 4,
        tipo_form: "Corto",
        Uso_de_PC: "Gaming",
        Presupuesto: "Economica",
        Tamano_del_PC: "Pequeño-(Micro ATX)",
        Diseno: "Normal",
        Tipo_de_refrigeracion: "",
        Overclocking: false,
        Marca_Procesador: "Intel",
        Programas_used: "",
      },
      {
        id: 5,
        tipo_form: "Corto",
        Uso_de_PC: "Streaming",
        Presupuesto: "Media",
        Tamano_del_PC: "Estandar-(ATX)",
        Diseno: "Gaming",
        Tipo_de_refrigeracion: "",
        Overclocking: false,
        Marca_Procesador: "AMD",
        Programas_used: "",
      },
    ],
    reporte: [
      {
        id: 1,
        descripcion: "Problemas de conectividad",
        fecha: "2022-06-12",
        estado: "Pendiente",
      },
      {
        id: 2,
        descripcion: "Fallas en registrar sesion",
        fecha: "2022-06-12",
        estado: "En proceso",
      },
      {
        id: 3,
        descripcion: "Problemas en la base de datos",
        fecha: "2022-12-20",
        estado: "Finalizado",
      },
      {
        id: 4,
        descripcion: "Error de lectura en la tabla de clientes",
        fecha: "2022-08-20",
        estado: "En proceso",
      },
      {
        id: 5,
        descripcion: "Problemas de conexión a la base de datos",
        fecha: "2022-07-21",
        estado: "Pendiente",
      },
      {
        id: 6,
        descripcion: "Error en la generación de recomendacion de pc",
        fecha: "2022-12-24",
        estado: "Finalizado",
      },
      {
        id: 7,
        descripcion: "Error en la funcionalidad de inicio de sesión",
        fecha: "2021-12-20",
        estado: "En proceso",
      },
      {
        id: 8,
        descripcion: "Problemas de rendimiento en la plataforma",
        fecha: "2023-01-20",
        estado: "Pendiente",
      },
    ],
    comentario: [
      {
        id: 1,
        comentario: "Gracias por la recomendacion",
        fecha: "2023-04-10",
      },
      {
        id: 2,
        comentario: "Oigan capos su página me savlo de apuros thanks",
        fecha: "2023-04-11",
      },
      {
        id: 3,
        comentario: "Me guto pero espero un poco mas de recomendaciones",
        fecha: "2023-04-12",
      },
    ],
    administrador: [
      {
        id: 1,
        profesion: "Ingeniero de Sistemas",
        area_trabajo: "Desarrollo",
        horario: "8:00am - 5:00pm",
        cumpleanos: "1990-06-12",
        estado_vacaciones: false,
        estado_contrato: true,
      },
      {
        id: 2,
        profesion: "Administrador de Base de Datos",
        area_trabajo: "Operaciones",
        horario: "10:00am - 7:00pm",
        cumpleanos: "1985-04-05",
        estado_vacaciones: false,
        estado_contrato: true,
      },
      {
        id: 3,
        profesion: "Ingeniero de Redes",
        area_trabajo: "Infraestructura",
        horario: "9:00am - 6:00pm",
        cumpleanos: "1992-02-15",
        estado_vacaciones: false,
        estado_contrato: true,
      },
    ],
    recomendacion: [
      {
        id: 1,
        valoracion_user: 4,
        notas_adicionales: "Me gustó la recomendación brindada",
      },
      {
        id: 2,
        valoracion_user: 5,
        notas_adicionales: "Me encantó la sugerencia que se me ha dado",
      },
      {
        id: 3,
        valoracion_user: 3,
        notas_adicionales:
          "Estoy un poco en desacuerdo con la recomendación dada",
      },
      {
        id: 4,
        valoracion_user: 2,
        notas_adicionales: "No estoy tan de acuerdo con la recomendación",
      },
      {
        id: 5,
        valoracion_user: 4,
        notas_adicionales: "Me agrada la recomendación que se me ha brindado",
      },
    ],
  };
  return data;
};
